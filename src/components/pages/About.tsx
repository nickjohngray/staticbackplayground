import React from 'react';
import PdfViewer from 'components/PdfViewer';
import {faFacebook, faGoogle, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {FontAwesomeIcon} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

export default () => (
    <div className="page center-it">
        <h1 className="center-text">About us</h1>
        Strongman Gym. Making the IMPOSSIBLE POSSIBLE through amazing feats of strength.
        <br></br>2019 Strongest Strongman Gym in NZ. Afaese Paea : Director/Owner of Strength Pit Otara
        <h2 className="center-text">Contact Us</h2>
        <div className="center-text social-icons">
            <a href="mailto:strengthpitotara@gmail.com">
                <FontAwesomeIcon size="1x" icon={faGoogle} />
                <span>StrengthPitOtara@gmail.com</span>
            </a>

            <a
                placeholder="Facebook Strength Pit Otara Limited"
                href="https://www.facebook.com/StrengthPitOtaraLimited"
                target="_new"
            >
                <FontAwesomeIcon size="1x" icon={faFacebook} />
                <span>StrengthPitOtaraLimited</span>{' '}
            </a>

            <a href="https://www.instagram.com/nzstrengthcoach/" target="_new">
                <FontAwesomeIcon size="1x" icon={faInstagram} />
                <span> NZStrengthCoach</span>{' '}
            </a>

            <a href="tel:0220122821" target="_new">
                <FontAwesomeIcon size="1x" icon={faPhone} />
                <span> (022) 012 2821 </span>{' '}
            </a>
        </div>
        <br></br>
        <h2>Athletes coached by NZ strength coach</h2>
        <h2 className="center-text">
            <a title="download" href="./../src/pdf/strength_pit_otara_strongman_athletes_board_2020.pdf" target="_new">
                Strong Man Athletes Board 2020
            </a>
        </h2>
        <PdfViewer file={'./../src/pdf/strength_pit_otara_strongman_athletes_board_2020.pdf'} />
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
    </div>
);
