import {globalHistory, HistoryListenerParameter, Router} from '@reach/router';
import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Routes, useSiteData} from 'react-static';
import {Dispatch} from 'redux';
import {changeURL} from '../redux/actions/history.action';
import {loadShop} from '../redux/actions/shop.action';
import {IHistory, IManifest, IPage} from '../typings';
import ShortCartSummary from './ecom/ShortCartSummary';
import Header from './Header';

interface LayoutSummaryProps {
    changeURL: (url: IHistory) => void;
    loadShop: () => void;
}

const Layout: FC<LayoutSummaryProps> = ({changeURL, loadShop}) => {
    loadShop();

    globalHistory.listen((history: HistoryListenerParameter) => {
        changeURL({URL: history.location.pathname});
    });

    return (
        <div id="content">
            <Header />
            <Router>
                <Routes path="*" />
                <Routes default />
            </Router>
            <ShortCartSummary></ShortCartSummary>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeURL: (url: IHistory) => {
        dispatch(changeURL(url));
    },
    loadShop: () => {
        const manifest: IManifest = useSiteData();
        dispatch(loadShop(manifest));

        const page: IPage = manifest.pages.find(page => page.path === 'sponsors');

        page.images.map(image => {
            const Img = new Image();
            Img.src = require('./../images/' + image.src);
        });
    }
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(Layout);
