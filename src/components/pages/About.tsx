import React from 'react';
import PdfViewer from 'components/PdfViewer';

export default () => (
    <div className="page center-it">
        <h1 className="center-text">About us</h1>

        <h2 className="center-text">
            <a
                title="download"
                href="./../src/pdf/list_of_strength_pit_otara_strongman_athletes_board_2020.pdf"
                target="_new"
            >
                Strength Pit Otara strongman athletes board 2020
            </a>
        </h2>
        <PdfViewer file={'./../src/pdf/list_of_strength_pit_otara_strongman_athletes_board_2020.pdf'} />
    </div>
);
