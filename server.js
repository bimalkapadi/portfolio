<!-- SKILLS SECTION -->
<section class="section dark-section" id="skills">
  <div class="container">
    <div class="section-heading reveal">
      <span class="kicker">04 / CAPABILITIES</span>
      <h2>Skills that <span>move projects.</span></h2>
    </div>

    <!-- Soft / Professional Capabilities -->
    <h3 class="reveal" style="margin-bottom: 1.5rem;">Professional Capabilities</h3>
    <div class="skills-grid" style="margin-bottom: 3rem;">
      <% if (typeof skills !== 'undefined' && skills.length > 0) { %>
        <% skills.forEach((skill, i) => { %>
          <div class="skill reveal">
            <span><%= (i + 1).toString().padStart(2, '0') %></span>
            <strong><%= skill %></strong>
          </div>
        <% }) %>
      <% } %>
    </div>

    <!-- Technical / Software Tools -->
    <h3 class="reveal" style="margin-bottom: 1.5rem;">Technical & Software Tools</h3>
    <div class="skills-grid">
      <% if (typeof technicalSkills !== 'undefined' && technicalSkills.length > 0) { %>
        <% technicalSkills.forEach((skill, i) => { %>
          <div class="skill reveal">
            <span><%= (i + 1).toString().padStart(2, '0') %></span>
            <strong><%= skill %></strong>
          </div>
        <% }) %>
      <% } %>
    </div>

  </div>
</section>
