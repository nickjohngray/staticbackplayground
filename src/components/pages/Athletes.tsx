import React from 'react';
import {IPage, IManifest} from 'src/typings';
import {useSiteData} from 'react-static';
import SectionList from 'components/SectionList';

export default () => {
    const manifest: IManifest = useSiteData();
    const page: IPage = manifest.pages.find(page => page.path === 'athletes');

    return (
        <div className={'page center-it '}>
            <h1>Athletes</h1>
            <SectionList sections={page.sections} imagePath={manifest.imagePath} />
        </div>
    );
};
