import codeTheme from 'prism-react-renderer';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
export const title = 'Kubernetes to Docker';
export const url = 'https://www.k2d.io';
export const baseUrl = '/';
export const onBrokenLinks = 'throw';
export const onBrokenMarkdownLinks = 'warn';
export const favicon = 'img/favicon.ico';
export const organizationName = 'Portainer';
export const projectName = 'k2d';
export const plugins = [
    'docusaurus-plugin-sass',
    [
        'docusaurus-plugin-plausible',
        {
            domain: 'k2d.io',
        },
    ],
];
export const presets = [
    [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: false,
            theme: {
                customCss: require.resolve('./src/css/custom.scss'),
            },
            blog: {
                blogSidebarCount: 0,
            },
            sitemap: {
                changefreq: 'weekly',
                priority: 0.5,
                ignorePatterns: ['/tags/**'],
                filename: 'sitemap.xml',
            },
        }),
    ],
];
export const themeConfig =
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        metadata: [
            { name: 'robots', content: 'max-image-preview:large' },
            { name: 'twitter:card', content: 'summary_large_image' },
            {
                name: 'keywords',
                content: 'k2d',
            },
        ],
        image: '/img/social-preview.png',
        algolia: {
            appId: '4DIHFTG6M8',
            apiKey: '3dd5113de5a0f6a279f56dd3ab216095',
            indexName: 'k2d',
            contextualSearch: true,
            insights: true,
            debug: false
            // externalUrlRegex: '',
        },
        navbar: {
            title: '',
            hideOnScroll: true,
            logo: {
                alt: 'Logo',
                src: 'img/logo.png',
                srcDark: 'img/logo-dark.png',
                href: '/',
                target: '_self',
                width: 50,
            },
            items: [
                {
                    type: 'search',
                    position: 'right',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    href: 'https://docs.k2d.io',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    'aria-label': 'Docker repo',
                    to: 'https://hub.docker.com/r/portainer/k2d',
                    position: 'right',
                    className: 'navbar__icon navbar__docker',
                },
                {
                    'aria-label': 'GitHub repo',
                    to: 'https://github.com/portainer/k2d',
                    position: 'right',
                    className: 'navbar__icon navbar__github',
                },
            ],
        },
        // footer: {
        //     style: 'dark',
        //     copyright: `Copyright © ${new Date().getFullYear()} K2D.`,
        // },
        footer: {
            links: [
                {
                    title: 'Quick Links',
                    items: [
                        {
                            label: 'Documentation',
                            to: 'https://docs.k2d.io/',
                        },
                        {
                            label: 'Github Project',
                            to: 'https://github.com/portainer/k2d',
                        },
                        {
                            label: 'Gituhub Organization',
                            to: 'https://github.com/portainer/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discussions',
                            to: 'https://github.com/portainer/k2d/discussions',
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Twitter',
                            to: 'https://twitter.com/portainerio',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Portainer`,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 2,
        },
        prism: {
            theme: codeTheme,
            additionalLanguages: ['json', 'bash', 'diff', 'php', 'ruby', 'java', 'csharp', 'go', 'kotlin', 'python'],
        },
    });
