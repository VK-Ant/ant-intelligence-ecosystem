# Arikizui Lab

![Arikizui Lab](images/arikizui_lab_banner.png)

Independent Applied AI Research Initiative by [Venkatkumar Rajan](https://github.com/VK-Ant).

**Live site:** [vk-ant.github.io/arikizui-lab](https://vk-ant.github.io/arikizui-lab/)

Arikizui Lab is the umbrella for three areas of work:

- **Ant Intelligence Ecosystem** -- seven open-source Python libraries + Ant Studio CLI/SDK for building AI systems
- **Arikizu OS** -- edge-first AI runtime that runs locally without cloud dependency
- **Spatial Intelligence** -- 3D computer vision, visual localization, and Atlas Geo Intelligence

---

## Ant Intelligence Ecosystem

**Docs:** [vk-ant.github.io/arikizui-lab/#home](https://vk-ant.github.io/arikizui-lab/#home)

Seven open-source Python libraries and a unified CLI/SDK for building AI systems.

### Libraries

| Library | What It Does | PyPI | GitHub |
|---|---|---|---|
| **SightRAG** | Visual RAG for images, video, cameras | [PyPI](https://pypi.org/project/sightrag/) | [GitHub](https://github.com/VK-Ant/sightrag) |
| **Sonarwise** | Audio perception, transcription, speaker ID | [PyPI](https://pypi.org/project/sonarwise/) | [GitHub](https://github.com/VK-Ant/sonarwise) |
| **DocQWise** | Document intelligence, extraction, RAG | [PyPI](https://pypi.org/project/docqwise/) | [GitHub](https://github.com/VK-Ant/docqwise) |
| **WavqWise** | Time-series forecasting, anomaly, signals | [PyPI](https://pypi.org/project/wavqwise/) | [GitHub](https://github.com/VK-Ant/wavqwise) |
| **Adaptive Intelligence** | Self-improving RAG with RL routing | [PyPI](https://pypi.org/project/adaptive-intelligence/) | [GitHub](https://github.com/VK-Ant/adaptive-intelligence) |
| **LLMEvalKit** | 79 metrics for LLM evaluation | [PyPI](https://pypi.org/project/llmevalkit/) | [GitHub](https://github.com/VK-Ant/llmevalkit) |
| **AntGuard** | System-level AI data privacy profiler | [PyPI](https://pypi.org/project/antguard/) | [GitHub](https://github.com/VK-Ant/antguard) |

### Ant Studio

CLI + Python SDK that unifies the entire ecosystem into one interface. One command, real results, with built-in quality scoring and privacy auditing on every run.

- [PyPI](https://pypi.org/project/antstudio/)
- [GitHub](https://github.com/VK-Ant/ant-studio)

```bash
pip install antstudio
```

### Install All

```bash
pip install antstudio sightrag sonarwise docqwise wavqwise adaptive-intelligence llmevalkit antguard
```

---

## Arikizu OS

**Docs:** [vk-ant.github.io/arikizui-lab/#arikizu](https://vk-ant.github.io/arikizui-lab/#arikizu)

Open-source, edge-first AI runtime that unifies vision, audio, document intelligence, local LLM reasoning, and sensor time-series processing on a single device -- without cloud dependency.

Built with a Rust supervisor and Python workers, it provides a unified HTTP API, local SQLite audit logging, and a browser-based dashboard.

- **GitHub:** [github.com/VK-Ant/arikizu](https://github.com/VK-Ant/arikizu)
- **License:** Apache 2.0

```bash
git clone https://github.com/VK-Ant/arikizu.git
cd arikizu
make build && make run
```

---

## Spatial Intelligence

**Docs:** [vk-ant.github.io/arikizui-lab/#atlas](https://vk-ant.github.io/arikizui-lab/#atlas)

Exploring 3D computer vision, visual localization, spatial AI, and multimodal intelligence. Includes **Atlas Geo Intelligence**: a conversational geospatial AI experience with 3D globe visualization, voice interaction, and spatial analysis.

---

## Contributing

This is an entirely open-source project. Contributions are welcome: bug reports, feature requests, pull requests, documentation improvements, or new integrations.

See each library's GitHub repository for issues and contribution guidelines.

If you are using any of these libraries in your company or project, share your use case. That feedback helps keep the ecosystem evolving.

## Author

**Venkatkumar Rajan** -- Founder & Independent Applied AI Researcher

- [Portfolio](https://vk-ant.github.io/Venkatkumar)
- [GitHub](https://github.com/VK-Ant)
- [LinkedIn](https://www.linkedin.com/in/venkatkumar-rajan/)
- [PyPI](https://pypi.org/user/Venkat_VK/)
- [Medium](https://medium.com/@VK_Venkatkumar/list/the-ant-intelligence-ecosystem-71503517a3c1)

## License

Documentation: MIT. Individual libraries: Apache 2.0 / MIT.
