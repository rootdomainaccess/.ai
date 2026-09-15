// Root Domain Access — Interactive Terminal & UI Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Handling
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      if (item) {
        item.classList.toggle('open');
      }
    });
  });

  // 2. Interactive Terminal Simulator
  const termInput = document.getElementById('terminal-input');
  const termOutput = document.getElementById('terminal-output');

  if (termInput && termOutput) {
    const commands = {
      'help': `Available commands:
  <span class="cmd">courses</span>     - List all 6 engineering tracks
  <span class="cmd">ccna</span>        - Show CCNA 200-301 syllabus & lab details
  <span class="cmd">rhcsa</span>       - Show Red Hat Enterprise Linux curriculum
  <span class="cmd">aws</span>         - Show AWS Solutions Architect blueprint
  <span class="cmd">firewall</span>    - Show Firewall & Network Security track
  <span class="cmd">labs</span>        - View 24/7 homelab rack access details
  <span class="cmd">whoami</span>      - View academy philosophy & faculty profile
  <span class="cmd">ping 8.8.8.8</span>- Test network latency to Google DNS
  <span class="cmd">enroll</span>      - Jump directly to batch enrollment
  <span class="cmd">clear</span>       - Clear the terminal screen`,

      'whoami': `root@access.local:~$ whoami
  Identity: Samved (Network & Security Engineer @ Catalyst Media / Know-All-Edge)
  Homelab Stack: Zorin OS, Docker, ZeroTier, Wazuh SIEM, Immich, Jellyfin
  Academy Philosophy: "Production-grade packet analysis & homelabs over PowerPoint slides."`,

      'courses': `┌────────────────────────────────┬──────────┬──────────┐
│ Course Track                   │ Duration │ Labs     │
├────────────────────────────────┼──────────┼──────────┤
│ 1. CCNA (200-301)              │ 120 hrs  │ 32 Racks │
│ 2. RHCSA / RHCE (RHEL 9)       │ 80 hrs   │ 24 Labs  │
│ 3. AWS Solutions Architect     │ 80 hrs   │ 20 Labs  │
│ 4. Firewall & Network Security │ 40 hrs   │ 15 Labs  │
│ 5. ISC2 CC (Cybersecurity)     │ 30 hrs   │ 10 Labs  │
│ 6. Agentic AI for Systems      │ 25 hrs   │ 8 Labs   │
└────────────────────────────────┴──────────┴──────────┘
Type '<span class="cmd">ccna</span>' or click any course to explore the deep syllabus.`,

      'ccna': `[+] Cisco Certified Network Associate (200-301)
  - 120 Hours Live Instructor-Led Sessions
  - 6 Domains: Network Fundamentals, L2 Switching, OSPF Routing, IP Services, L2 Security, Automation
  - 32 Real Racks & Packet Tracer Labs
  - Fee: ₹15,000 one-time (or ₹10,500 M1 + ₹5,500 M2)
  - Full syllabus: <a href="ccna.html" style="color:var(--cyan);text-decoration:underline;">Click to open ccna.html</a>`,

      'rhcsa': `[+] Red Hat Certified System Administrator (RHCSA EX200 / EX294)
  - 80 Hours hands-on Linux administration
  - Storage (LVM, RAID, XFS), systemd, SELinux, user security, Ansible automation
  - Full syllabus: <a href="rhcsa-rhce.html" style="color:var(--cyan);text-decoration:underline;">Click to open rhcsa-rhce.html</a>`,

      'aws': `[+] AWS Certified Solutions Architect Associate (SAA-C03)
  - 80 Hours cloud architecture & deployment
  - VPC peering, Transit Gateways, EC2, IAM, S3, ECS, RDS, Terraform IaC
  - Full syllabus: <a href="aws-solutions-architect.html" style="color:var(--cyan);text-decoration:underline;">Click to open aws-solutions-architect.html</a>`,

      'firewall': `[+] Firewall & Enterprise Network Security
  - 40 Hours real-world policy administration
  - Sophos XGS, Netskope CASB/Proxy, iptables, IPsec/SSL VPNs, IPS & Micro-segmentation
  - Full syllabus: <a href="firewall-security.html" style="color:var(--cyan);text-decoration:underline;">Click to open firewall-security.html</a>`,

      'labs': `[+] Remote Homelab & Cloud Rack Platform:
  - 24/7 ZeroTier VPN access to real lab environments
  - Physical Cisco Catalyst switches & routers + GNS3/EVE-NG topologies
  - Live Wireshark packet capture & troubleshooting sessions`,

      'ping 8.8.8.8': `PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=4.12 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=118 time=3.95 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=118 time=4.01 ms
--- 8.8.8.8 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, rtt min/avg/max = 3.95/4.02/4.12 ms`,

      'enroll': `Redirecting to batch enrollment...
Direct WhatsApp: <a href="https://wa.me/918451971503" target="_blank" style="color:var(--green);font-weight:bold;">Chat with Samved (+91 8451971503)</a>`
    };

    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const raw = termInput.value.trim().toLowerCase();
        termInput.value = '';

        if (!raw) return;

        // Print command line
        const cmdLine = document.createElement('div');
        cmdLine.className = 'term-line';
        cmdLine.innerHTML = `<span class="term-prompt">root@access:~$</span> <span class="term-cmd-text">${raw}</span>`;
        termOutput.appendChild(cmdLine);

        if (raw === 'clear') {
          termOutput.innerHTML = '';
          return;
        }

        const respLine = document.createElement('div');
        respLine.className = 'term-resp';

        if (commands[raw]) {
          respLine.innerHTML = commands[raw];
        } else {
          respLine.innerHTML = `command not found: ${raw}. Type '<span class="cmd">help</span>' for available commands.`;
        }

        termOutput.appendChild(respLine);
        termOutput.scrollTop = termOutput.scrollHeight;
      }
    });
  }
});
