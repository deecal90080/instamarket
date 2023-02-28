import { useState } from 'react';
import {
  ESize,
  EState,
  MbButton,
  MbText,
} from 'mintbase-ui';
import Head from 'next/head';
import Header from '../components/Header';
import Items from '../components/Items';
import BuyModal from '../components/BuyModal/BuyModal';
import { SelectedNft } from '../types/types';

function Store(): JSX.Element {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as SelectedNft);

  const handleOpenBuyModal = (item: SelectedNft) => {
    setSelectedItem(item);
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setSelectedItem({} as SelectedNft);
    setShowBuyModal(false);
  };

  return (
    <div className="flex flex-1 flex-col min-h-screen text-gray-500">
      <Head>
        <title>Mintbase - Simple Marketplace Example</title>
      </Head>
      <Header />
      <div className="m-8">
        <MbText>1. Connect wallet.</MbText>
        <MbText>2. Choose NFT.</MbText>
        <MbText>3. Purchase!</MbText>
        <div className="mt-4 flex">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/MetaMeech">
            <MbButton
              label="Follow Meta Meech On Twitter"
              size={ESize.MEDIUM}
              state={EState.ACTIVE}
            />
          </a>
        </div>
      </div>
      <div className="flex w-full">
        <Items showModal={handleOpenBuyModal} />
      </div>
      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
        )}
      </div>
    </div>
  );
}

export default Store;
