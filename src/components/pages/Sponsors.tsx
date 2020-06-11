import React from 'react';
import ImageLinkList from './../ImageLinkList';
import {useSiteData} from 'react-static';
import {IPage, IManifest} from './../../typings';

export default () => {
    const manifest: IManifest = useSiteData();
    const page: IPage = manifest.pages.find(page => page.path === 'sponsors');

    return (
        <div className={'page center-it sponsors'}>
            <h1>Sponsors</h1>
            <ImageLinkList images={page.images} imagePath={manifest.imagePath} />
        </div>
    );
};
