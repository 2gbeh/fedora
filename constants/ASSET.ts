import logo from "../assets/logo.png";
import icon from "../assets/icon.png";

// IMAGES
import images_box from "../assets/images/box.png";
import images_box_dark from "../assets/images/box-dark.png";

// UPLOADS
import uploads_account_buzzbite from "../assets/uploads/account-buzzbite.png";
import uploads_account_excitepl from "../assets/uploads/account-excitepl.png";
import uploads_account_rtk from "../assets/uploads/account-rtk.png";
import uploads_account_sehiaghe from "../assets/uploads/account-sehiaghe.png";
import uploads_account_semo23 from "../assets/uploads/account-semo23.png";
import uploads_account_skambia from "../assets/uploads/account-skambia.png";
import uploads_wallet_aboveonly from "../assets/uploads/wallet-aboveonly.png";
import uploads_wallet_cashapp from "../assets/uploads/wallet-cashapp.png";
import uploads_wallet_firstbank from "../assets/uploads/wallet-firstbank.png";
import uploads_wallet_gtbank from "../assets/uploads/wallet-gtbank.png";

const ASSET = {
  logo,
  icon,
  //
  images_box,
  images_box_dark,
  //
  uploads_account_buzzbite,
  uploads_account_excitepl,
  uploads_account_rtk,
  uploads_account_sehiaghe,
  uploads_account_semo23,
  uploads_account_skambia,
  uploads_wallet_aboveonly,
  uploads_wallet_cashapp,
  uploads_wallet_firstbank,
  uploads_wallet_gtbank,
};

export type TAsset = keyof typeof ASSET;

export default ASSET;
