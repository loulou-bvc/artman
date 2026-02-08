
import { supabase } from '/pages/supabaseClient.js';

document.addEventListener('DOMContentLoaded', () => {
  const devisForm = document.getElementById('devis-form');

  if (devisForm) {
    devisForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Empêche le rechargement de la page
      console.log('Formulaire soumis ! Début du traitement...');

      const formData = new FormData(devisForm);
      
      const submission = {
        fullname: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        city: formData.get('address'),
        is_company: formData.get('is-company') === 'on',
        besoin: formData.get('service'),
        details: formData.get('description'),
        budget: formData.get('budget')
      };

      // Assurons-nous que les champs requis ne sont pas vides
      if (!submission.fullname || !submission.phone || !submission.city || !submission.besoin || !submission.budget) {
          alert('Veuillez remplir tous les champs obligatoires (*).');
          return; // Stoppe l'envoi si un champ est manquant
      }

      const { data, error } = await supabase
        .from('form_devis')
        .insert([submission]);

      if (error) {
        console.error('Erreur Supabase:', error);
        // Affiche l'erreur détaillée pour le débogage
        alert(`Une erreur est survenue. Détails de Supabase : ${error.message}`);
      } else {
        console.log('Devis envoyé:', data);
        alert("Merci ! Votre demande de devis a bien été envoyée.");
        devisForm.reset();
      }
    });
  }
});
