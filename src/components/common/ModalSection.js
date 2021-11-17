import React, {useState} from 'react';
//Importing Modal
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const ModalSection = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ModalVideo channel={props.channel} isOpen={isOpen} videoId={props.videoId} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default ModalSection;