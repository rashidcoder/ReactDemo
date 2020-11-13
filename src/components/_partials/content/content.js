import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Check from '../../../assets/imgs/check.PNG'
import Truck from '../../../assets/imgs/truck.PNG'
import Plate from '../../../assets/imgs/plate.PNG'
import GhostMenu from '../../../assets/imgs/ghost-menu.jpg'
import GhostRecipre from '../../../assets/imgs/ghost-recipe.jpg'
import { ReactComponent as Chat } from '../../../assets/imgs/bubble.svg'
import './content.css';
const Content = () => {
    const [showPopUp, setshowPopUp] = useState(false);
    return (
        <div className="body">
            <div className="upper-section">
                <div className="center-item">
                    <img className="truck-icon"src={Truck} alt="matkasse"/>
                </div>
                <div className="heading">KAN VI LEVERERA TILL DIG?</div>
                <div className="sub-heading">Skriv in ditt postnummer nedan för att:</div>
                <div className="display-flex">
                    <img className="check-icon"src={Check} alt="matkasse"/>
                    <div className="sub-heading">Hitta leverantör av dina matvaror</div>
                </div>

                <div className="display-flex">
                    <img className="check-icon"src={Check} alt="matkasse"/>
                    <div className="sub-heading">Se första leveranstid och pris</div>
                </div>

                <div>
                    <input className="input"type="text"placeholder="Ditt postnummer"/>
                </div>
            </div>

            <div className="divider"></div>

            <div className="lower-section">
                <div className="box">
                    <div className="center-item"><img className="truck-icon"src={Plate} alt="matkasse"/></div>
                    <div className="heading text-center">PLANERA MÅLTIDER</div>
                    <div className="sub-heading text-center">Välj vad ni ska äta framöver:</div>
                </div>

                <div className="footer">
                    <div className="left-box display-flex-column">
                        <div className="center-item"><img className="menu-image"src={GhostMenu} alt="matkasse"/></div>
                        <button className="btn-"type="submit"onClick={() => { setshowPopUp(true) }} >FÅ PERSONLIGT
                        </button>
                    </div>

                    <div className="p-5">
                        eller
                  </div>

                    <div className="right-box display-flex-column">
                        <div className="center-item"><img className="menu-image"src={GhostRecipre} alt="matkasse"/></div>
                        <button className="btn-"type="submit">VÄLJ RECEPT SJÄLV</button>
                    </div>
                </div>
            </div>


            {/* live chat button */}
            <button className="btn-chat"type="submit"> <Chat className="svg-chat"/>
            </button>

            {/* popup          */}

            <Modal
                show={showPopUp}
                onHide={() => setshowPopUp(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                variant="warning"
                className="m-0"
            > 
                <Modal.Body className="d-flex flex-column text-center"style={{ justifyContent: "space-between"}}>
                <button style={{left:"unset"}} onClick={() => setshowPopUp(false)} type="button"class="close"><span  onClick={() => setshowPopUp(false)} aria-hidden="true">×</span><span class="sr-only">Close</span></button>

                    <div>
                        <div className="mt-5 heading">
                            FÅ ETT SKRÄDDARSYTT
                    </div>
                        <div className="heading">
                            MENYFÖRSLAG
                    </div>
                        <div className="sub-heading">
                            Vi kommer nu ställa några korta frågor för att kunna skapa ett menyförslag med recept som vi hoppas passar dig.
                    </div>
                    </div>
                    <div className="">
                        <Button type="submit"className="btn-pop-up  "onClick={() => setshowPopUp(false)}>   Hoppa över
                        </Button>{' '}
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}
export default Content
