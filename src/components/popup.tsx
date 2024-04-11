import Popup  from 'reactjs-popup'
import close from '../assets/images/close.png'

export function PopupT({ children, open, handleClose }: { children: any; open: boolean; handleClose: () => void }) {
    return (
        <Popup open={open}>
            <div className="popup">
            <div className="header">
                <img onClick={handleClose} src={close} alt="" className="close" />
            </div>

            {children}

            <div className="footer"></div>
            </div>
        </Popup>
    )
}
