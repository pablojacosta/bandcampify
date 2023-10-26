import { IResultList } from "interfaces/resultList";
import styles from "./ResultList.module.scss";
import { EListType, EListedElementTypes } from "@constants/enums";
import ListedElement from "@components/shared/ListedElement";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { Link } from "react-router-dom";
import useGetAlbum from "@hooks/useGetAlbum";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import useGetTrack from "@hooks/useGetTrack";
import { TFoundItem } from "types/foundItem";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { TRACKS } from "@constants/routes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "@utils/helpers/slider/sliderSettings";
import Items from "./components/Items";
import { useEffect, useRef, useState } from "react";

const ITEM_WIDTH = 13;

const ResultList = ({ items, type }: IResultList) => {
  const windowWidth = useRef(window.innerWidth);
  const listedElementType =
    type === EListType.ALBUMS
      ? EListedElementTypes.ALBUM
      : EListedElementTypes.TRACK;
  const { setShowTracks, setAlbumUrl, setHideAlbums, setIsAlbum } =
    useSelectedAlbumStore();
  const { getAlbum } = useGetAlbum();
  const { getTrack } = useGetTrack();
  const { setIsTrack } = useSelectedTrackStore();
  const { setFetchArtist } = useSelectedArtistStore();
  const itemsWidth = (items.length * ITEM_WIDTH + 1) * 16;
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    console.log("windowWidth", windowWidth);
    if (itemsWidth >= windowWidth.current) {
      setShowSlider(true);
    }
  }, [itemsWidth, windowWidth]);

  return (
    <div className={styles.list}>
      <h2>{type}</h2>
      {items.length > 7 || showSlider ? (
        <div className={styles.slider}>
          <Slider {...sliderSettings(items.length)}>
            {items.map((item: TFoundItem) => {
              const handleAlbumOnClick = () => {
                setFetchArtist(true);
                getAlbum(item.url);
                setShowTracks(true);
                setAlbumUrl(item.url);
                setHideAlbums(true);
                setIsTrack(false);
                setIsAlbum(true);
              };

              const handleSongOnClick = () => {
                setFetchArtist(true);
                getTrack(item.url);
                setShowTracks(true);
                setHideAlbums(true);
                setIsTrack(true);
                setIsAlbum(false);
              };

              return (
                <Link to={TRACKS} key={`${item.url}`}>
                  <ListedElement
                    key={`${item.url}`}
                    onClick={
                      listedElementType === EListedElementTypes.ALBUM
                        ? () => handleAlbumOnClick()
                        : () => handleSongOnClick()
                    }
                    image={item.imageUrl}
                    name={item.name}
                    artist={item.artist}
                    type={listedElementType}
                    album={item.album ?? undefined}
                  />
                </Link>
              );
            })}
          </Slider>
        </div>
      ) : (
        <ul>
          <Items items={items} type={type} />
        </ul>
      )}
    </div>
  );
};

export default ResultList;
