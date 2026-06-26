---
title: contact
---


<section>
  <h2>Contact Me</h2>
  
  <!-- Formulário sem action/method pois usaremos JS Fetch -->
  <form id="contactForm" novalidate>
    <!-- Honeypot Anti-Bot (Oculto visualmente) -->
    <div style="display:none;">
      <label for="website">Website</label>
      <input type="text" name="website" id="website" tabindex="-1" autocomplete="off">
    </div>
    <div class="fields">
      <div class="field half">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" autocomplete="name" required placeholder="Your Name" />
      </div>

      <div class="field half">
        <label for="email">Email</label>
        <input type="email" name="_replyto" id="email" autocomplete="email" required placeholder="you@example.com" />
      </div>
      
      <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="5" required placeholder="Write your message here..."></textarea>
      </div>
    </div>
    
    <ul class="actions">
      <li><input type="submit" value="Send Message" /></li>
      <li><input type="reset" value="Reset" /></li>
    </ul>
  </form>

  <!-- Div para exibir mensagens de sucesso/erro estilizada pelo main.js -->
  <div id="formStatus"></div>

  <!-- Ícones Sociais -->
  <ul class="icons">
    {% if site.instagram_url %}
    <li>
      <a href="{{ site.instagram_url }}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img src="/assets/images/w98-icon/camera-0.png" alt="" width="16" height="16" loading="lazy" />
        Instagram
      </a>
    </li>
    {% endif %}

    {% if site.github_url %}
    <li>
      <a href="{{ site.github_url }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img src="/assets/images/w98-icon/console_prompt-0.png" alt="" width="16" height="16" loading="lazy" />
        GitHub
      </a>
    </li>
    {% endif %}
    
    {% if site.linkedin_url %}
    <li>
      <a href="{{ site.linkedin_url }}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <img src="/assets/images/w98-icon/file_eye.png" alt="" width="16" height="16" loading="lazy" />
        LinkedIn
      </a>
    </li>
    {% endif %}
  </ul>
</section>
