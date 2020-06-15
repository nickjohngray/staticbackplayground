import React from 'react';
import PdfViewer from 'components/PdfViewer';

export default () => (
    <div className="page center-it">
        <h1 className="center-text">About us</h1>

        <h2 className="center-text">
            <a
                title="download"
                href="./../src/pdf/strength_pit_otara_strongwoman_athletes_board_2020.pdf"
                target="_new"
            >
                Strong Woman Athletes Board 2020
            </a>
        </h2>
        <PdfViewer file={'./../src/pdf/strength_pit_otara_strongwoman_athletes_board_2020.pdf'} />

        <h2 className="center-text">
            <a title="download" href="./../src/pdf/strength_pit_otara_strongman_athletes_board_2020.pdf" target="_new">
                Strong Man Athletes Board 2020
            </a>
        </h2>
        <PdfViewer file={'./../src/pdf/strength_pit_otara_strongman_athletes_board_2020.pdf'} />
    </div>
);
