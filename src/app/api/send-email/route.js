import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Récupération des données de la requête
    const { name, email, phone, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis" },
        { status: 400 }
      );
    }

    // Création du contenu de l'email
    const emailData = {
      from: "My Easy Plan <onboarding@resend.dev>",
      to: "pringuetlaurie@outlook.fr", // L'adresse email qui recevra les demandes de contact
      subject: `Nouvelle demande de contact de ${name}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Échec de l'envoi de l'email" },
        { status: 500 }
      );
    }

    console.log("Email envoyé avec succès:", data);

    // Réponse réussie
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json(
      {
        error: "Une erreur s'est produite lors du traitement de votre demande",
      },
      { status: 500 }
    );
  }
}
