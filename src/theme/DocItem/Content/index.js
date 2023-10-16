import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import Giscus from '@giscus/react';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import clsx from 'clsx';
import React from 'react';

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
    const { metadata, frontMatter, contentTitle } = useDoc();
    const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
    if (!shouldRender) {
        return null;
    }
    return metadata.title;
}
export default function DocItemContent({ children }) {
    const syntheticTitle = useSyntheticTitle();
    return (
        <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
            {syntheticTitle && (
                <header>
                    <Heading as="h1">{syntheticTitle}</Heading>
                </header>
            )}
            <MDXContent>{children}</MDXContent>
            <br />
            <hr />
            <br />
            <Giscus
                key={1}
                id="Comments"
                repo="portainer/k2d.io"
                repoId="R_kgDOKhIF7w"
                category="Comments"
                categoryId="DIC_kwDOKhIF784CaL1N"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="transparent_dark"
                lang="en"
                loading="lazy"
            />
            <br />
            <br />
        </div>
    );
}
