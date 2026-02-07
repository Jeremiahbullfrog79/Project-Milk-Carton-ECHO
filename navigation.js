// Navigation and landing page functionality

function selectAge(ageRange) {
    // Store the selected age range
    sessionStorage.setItem('selectedAge', ageRange);

    // Show scenario selection
    showScenarioSelection(ageRange);
}

function showScenarioSelection(ageRange) {
    const scenarios = getScenarios(ageRange);

    if (!scenarios || scenarios.length === 0) {
        alert('No scenarios available for this age range yet.');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    const ageLabels = {
        '11-13': '11-13 Years',
        '14-15': '14-15 Years',
        '16-17': '16-17 Years'
    };

    let scenariosHTML = scenarios.map(scenario => {
        const difficultyStars = '⭐'.repeat(scenario.difficulty);
        return `
            <div class="age-card" style="cursor: pointer; margin-bottom: 20px;" onclick="startScenario('${ageRange}', '${scenario.id}')">
                <div class="card-header">
                    <h4>${scenario.title}</h4>
                    <div style="color: var(--text-secondary); margin-top: 10px;">
                        Difficulty: ${difficultyStars}
                    </div>
                </div>
                <div class="card-content">
                    <p>${scenario.description}</p>
                </div>
            </div>
        `;
    }).join('');

    modalBody.innerHTML = `
        <h2 style="color: var(--accent-color); margin-bottom: 30px;">Choose Your Scenario</h2>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">
            Age Range: <strong>${ageLabels[ageRange]}</strong>
        </p>
        ${scenariosHTML}
    `;

    modal.classList.remove('hidden');
}

function startScenario(ageRange, scenarioId) {
    window.location.href = `game.html?age=${ageRange}&scenario=${scenarioId}`;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

function showParentGuide() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2 style="color: var(--accent-color); margin-bottom: 30px;">Parent & Educator Guide</h2>

        <div style="text-align: left; color: var(--text-primary);">
            <h3 style="color: var(--accent-color); margin-top: 30px;">What is ECHO?</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                ECHO (Every Child Has Options) is an educational game system designed to teach safety awareness
                through multi-perspective storytelling. Unlike traditional "stranger danger" approaches, ECHO
                focuses on critical thinking, communication, and understanding that safety is a shared responsibility.
            </p>

            <h3 style="color: var(--accent-color); margin-top: 30px;">How It Works</h3>
            <ul style="color: var(--text-secondary); line-height: 2; margin: 15px 0;">
                <li>Players experience scenarios from three perspectives: child, parent, and community member</li>
                <li>Each choice is followed by educational explanations, not punishment</li>
                <li>No "game over" - every choice is a learning opportunity</li>
                <li>Age-appropriate content designed by safety experts</li>
                <li>Connects to real Project Milk Carton resources</li>
            </ul>

            <h3 style="color: var(--accent-color); margin-top: 30px;">Playing Together</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                We recommend parents play through scenarios with their children, especially for younger age groups.
                Use the scenarios as conversation starters. The discussion prompts that appear after each scenario
                are designed to facilitate meaningful dialogue about safety.
            </p>

            <h3 style="color: var(--accent-color); margin-top: 30px;">What Children Learn</h3>
            <ul style="color: var(--text-secondary); line-height: 2; margin: 15px 0;">
                <li><strong>Critical Thinking:</strong> How to assess situations and make safe choices</li>
                <li><strong>Communication:</strong> When and how to ask trusted adults for help</li>
                <li><strong>Boundaries:</strong> Recognizing and enforcing personal boundaries</li>
                <li><strong>Red Flags:</strong> Identifying manipulation, grooming, and dangerous situations</li>
                <li><strong>Empathy:</strong> Understanding how choices affect others</li>
                <li><strong>Community:</strong> Recognizing that safety involves everyone</li>
            </ul>

            <h3 style="color: var(--accent-color); margin-top: 30px;">Age Appropriateness</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                Each age range is carefully calibrated:
            </p>
            <ul style="color: var(--text-secondary); line-height: 2; margin: 15px 0;">
                <li><strong>11-13:</strong> Basic safety skills, online boundaries, peer pressure, identifying trusted adults</li>
                <li><strong>14-15:</strong> Social media safety, relationship red flags, manipulation awareness, transportation safety</li>
                <li><strong>16-17:</strong> Advanced topics including consent, labor trafficking, bystander intervention, helping peers</li>
            </ul>

            <h3 style="color: var(--accent-color); margin-top: 30px;">Privacy & Data</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                ECHO does not collect personal information. All gameplay data stays on your device.
                Optional progress sharing is controlled by the player.
            </p>

            <h3 style="color: var(--accent-color); margin-top: 30px;">Questions or Concerns?</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                Visit <a href="https://projectmilkcarton.org" target="_blank" style="color: var(--accent-color);">projectmilkcarton.org</a>
                for more information about our mission and resources.
            </p>
        </div>
    `;

    modal.classList.remove('hidden');
}

function showResources() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2 style="color: var(--accent-color); margin-bottom: 30px;">Crisis Resources</h2>

        <div style="text-align: left; color: var(--text-primary);">
            <p style="color: var(--text-secondary); margin-bottom: 30px; line-height: 1.8;">
                If you or someone you know needs immediate help, these resources are available 24/7:
            </p>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">🆘 Emergency</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;"><strong>Call 911</strong></p>
                <p style="color: var(--text-secondary); margin-top: 10px;">For immediate life-threatening situations</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">🚨 Human Trafficking</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;"><strong>1-888-373-7888</strong></p>
                <p style="color: var(--text-secondary); margin-top: 10px;">National Human Trafficking Hotline - Available 24/7 in 200+ languages</p>
                <p style="color: var(--text-secondary); margin-top: 10px;">Text: 233733</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">💬 Crisis Text Line</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;"><strong>Text HOME to 741741</strong></p>
                <p style="color: var(--text-secondary); margin-top: 10px;">Free, 24/7 support for people in crisis</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">🧒 Child Abuse</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;"><strong>1-800-422-4453</strong></p>
                <p style="color: var(--text-secondary); margin-top: 10px;">Childhelp National Child Abuse Hotline</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">🧠 Mental Health</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;"><strong>988</strong></p>
                <p style="color: var(--text-secondary); margin-top: 10px;">Suicide & Crisis Lifeline - Call or text 988</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">💔 Domestic Violence</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;"><strong>1-800-799-7233</strong></p>
                <p style="color: var(--text-secondary); margin-top: 10px;">National Domestic Violence Hotline</p>
                <p style="color: var(--text-secondary); margin-top: 10px;">Text: START to 88788</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">🥛 Project Milk Carton ARIA</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;">
                    <a href="https://t.me/projectmilkcarton" target="_blank" style="color: var(--accent-color);">Telegram Bot</a>
                </p>
                <p style="color: var(--text-secondary); margin-top: 10px;">AI-powered research and intelligence assistant</p>
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin: 20px 0;">
                <h3 style="color: var(--accent-color); margin-bottom: 15px;">🔍 Missing Children</h3>
                <p style="color: var(--text-primary); font-size: 1.2rem;"><strong>1-800-843-5678</strong></p>
                <p style="color: var(--text-secondary); margin-top: 10px;">National Center for Missing & Exploited Children</p>
            </div>

            <p style="color: var(--text-secondary); margin-top: 40px; line-height: 1.8; font-style: italic;">
                Remember: Reaching out for help is a sign of strength, not weakness.
                You are not alone, and these resources exist to support you.
            </p>
        </div>
    `;

    modal.classList.remove('hidden');
}

function showAbout() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2 style="color: var(--accent-color); margin-bottom: 30px;">About ECHO</h2>

        <div style="text-align: left; color: var(--text-primary);">
            <h3 style="color: var(--accent-color); margin-bottom: 15px;">Every Child Has Options</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                ECHO is an innovative educational game system created by Project Milk Carton to teach
                safety awareness through interactive storytelling. We believe that understanding safety
                from multiple perspectives creates more aware, empowered, and protected communities.
            </p>

            <h3 style="color: var(--accent-color); margin-top: 30px; margin-bottom: 15px;">Why Multi-Perspective?</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                Traditional safety education often focuses on telling children what NOT to do.
                ECHO takes a different approach by showing the same situation from multiple viewpoints:
            </p>
            <ul style="color: var(--text-secondary); line-height: 2; margin: 15px 0;">
                <li><strong>Child Perspective:</strong> Builds critical thinking and decision-making skills</li>
                <li><strong>Parent Perspective:</strong> Shows how adults can support and protect</li>
                <li><strong>Community Perspective:</strong> Demonstrates how everyone plays a role in safety</li>
            </ul>

            <h3 style="color: var(--accent-color); margin-top: 30px; margin-bottom: 15px;">Evidence-Based Design</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                Every scenario in ECHO is based on real data from Project Milk Carton's research into
                child welfare, missing children cases, and safety incidents. Our scenarios reflect actual
                situations children face, not hypothetical fears.
            </p>

            <h3 style="color: var(--accent-color); margin-top: 30px; margin-bottom: 15px;">About Project Milk Carton</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                Project Milk Carton is a civic intelligence initiative focused on child welfare transparency
                and accountability. We track federal grants, investigate systemic issues, and maintain a
                missing children intelligence database. ECHO is part of our mission to shine light on
                child welfare through education and awareness.
            </p>

            <div style="background: rgba(69, 183, 232, 0.1); padding: 20px; border-radius: 15px; margin: 30px 0; border-left: 4px solid var(--accent-color);">
                <p style="color: var(--text-primary); margin: 0;">
                    <strong>Our Mission:</strong> Shining light on child welfare transparency through data,
                    investigation, and education.
                </p>
            </div>

            <h3 style="color: var(--accent-color); margin-top: 30px; margin-bottom: 15px;">Get Involved</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin: 15px 0;">
                Visit <a href="https://projectmilkcarton.org" target="_blank" style="color: var(--accent-color);">projectmilkcarton.org</a>
                to learn more about our work, access our intelligence database, connect with ARIA our AI assistant,
                or get involved in child welfare advocacy.
            </p>

            <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="color: var(--text-secondary); text-align: center; font-size: 0.9rem;">
                    ECHO v1.0 | Created with ❤️ by Project Milk Carton<br>
                    © 2026 Project Milk Carton | All Rights Reserved
                </p>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
