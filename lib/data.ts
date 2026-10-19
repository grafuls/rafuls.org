export const projects = [
  {
    id: "quads",
    title: "Quads",
    description:
      "The infrastructure deployment time machine. Schedule and provision bare-metal and cloud lab capacity for performance testing teams — pools, VLANs, and leases managed through one API.",
    detail:
      "Powers Red Hat's performance and RHEL lab fleets: rack inventories, provisioning leases, and network configuration across dozens of labs, used daily by teams running regression and benchmark suites.",
    tags: ["Python", "Flask", "Ansible", "OpenStack", "Bare Metal"],
    githubUrl: "https://github.com/redhat-performance/quads",
    demoUrl: "https://quads.dev",
  },
  {
    id: "qiip",
    title: "Qiip",
    description:
      "QUADS Idle Inference Proxy — a tractor beam for idle GPU hardware. Finds unused inference capacity across your fleet and brings it under automation.",
    tags: ["Python", "GPU", "QUADS", "Proxy"],
    githubUrl: "https://github.com/grafuls/qiip",
  },
  {
    id: "badfish",
    title: "Badfish",
    description:
      "Vendor-agnostic bare-metal control via Redfish. Firmware updates, BIOS config, and boot orchestration across Dell, HPE, and supermicro fleets from one CLI.",
    tags: ["Python", "Redfish", "AsyncIO"],
    githubUrl: "https://github.com/redhat-performance/badfish",
  },
  {
    id: "wppt",
    title: "WPPT",
    description:
      "Webhook proxy that validates, transforms, and forwards payloads — the glue between alerting systems and automation runners.",
    tags: ["Python", "Proxy", "Webhooks"],
    githubUrl: "https://github.com/redhat-performance/wppt",
  },
  {
    id: "huncho",
    title: "Huncho",
    description:
      "A portable Rust serving engine for System One decision models, with calibrated probabilities exposed through a stable API.",
    tags: ["Rust", "ML serving", "ONNX"],
    githubUrl: "https://github.com/grafuls/huncho",
  },
]

export const skills = {
  Languages: ["Python", "TypeScript", "Rust", "Bash", "SQL"],
  "Infrastructure & Cloud": [
    "Kubernetes",
    "OpenShift",
    "Podman",
    "Ansible",
    "AWS",
    "GCP",
    "Terraform",
    "Redfish",
  ],
  "Tooling & Practice": [
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    "Gerrit",
    "Grafana",
    "Linux",
  ],
}
