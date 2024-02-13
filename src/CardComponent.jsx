import { ReactComponent as EthereumIcon } from "./images/icon-ethereum.svg";
import { ReactComponent as ClockIcon } from "./images/icon-clock.svg";

export default function CardComponent() {
  return (
    <div className="Box-div">
      <div className="Component-div">
        <div className="Card-Image-div">
          <div className="Card-Overlay"></div>
          <img className="Card-Image" src="image-equilibrium.jpg" alt="Logo" />
        </div>
        <p className="Card-Title">Equilibrium #3429</p>
        <p className="Card-Desc">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="Card-Eth-Date">
          <p className="Card-Eth">
            <EthereumIcon />

            <span className="Card-Date-Span-ETH">0.041 ETH</span>
          </p>
          <p className="Card-Date">
            <ClockIcon />
            <span className="Card-Date-Span-Clock">3 days left</span>
          </p>
        </div>
        <div class="Card-Solid-Line"></div>
        <div className="Card-Footer">
          <img className="Card-Avatar" src="image-avatar.png" alt="Avatar" />
          <p className="Card-Footer-P">
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}
