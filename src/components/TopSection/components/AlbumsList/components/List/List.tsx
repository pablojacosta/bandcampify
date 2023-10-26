import { IList } from "interfaces/list";
import styles from "./List.module.scss";
import { EListType, EListedElementTypes } from "@constants/enums";
import ListedElement from "@components/shared/ListedElement";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { Link } from "react-router-dom";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import useGetAlbum from "@hooks/useGetAlbum";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import useGetTrack from "@hooks/useGetTrack";
import { IAlbumMinInfo } from "interfaces/albumMinInfo";
import { TRACKS } from "@constants/routes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "@utils/helpers/slider/sliderSettings";
import useShowSlider from "@hooks/useShowSlider";
import ListItems from "./components/ListItems";

const List = ({ items, type }: IList) => {
  const listedElementType =
    type === EListType.ALBUMS
      ? EListedElementTypes.ALBUM
      : EListedElementTypes.TRACK;
  const { setShowTracks, setAlbumUrl, setHideAlbums } = useSelectedAlbumStore();
  const { artistInfo } = useSelectedArtistStore();
  const { getAlbum } = useGetAlbum();
  const { getTrack } = useGetTrack();
  const { setIsTrack } = useSelectedTrackStore();
  const { showSlider } = useShowSlider(items.length);

  return (
    <div className={styles.list}>
      <h2>{type}</h2>
      {items.length > 7 || showSlider ? (
        <div className={styles.slider}>
          <Slider {...sliderSettings(items.length)}>
            {items.map((item: IAlbumMinInfo) => {
              const handleAlbumOnClick = () => {
                getAlbum(item.url);
                setShowTracks(true);
                setAlbumUrl(item.url);
                setHideAlbums(true);
              };

              const handleSongOnClick = () => {
                getTrack(item.url);
                setShowTracks(true);
                setHideAlbums(true);
                setIsTrack(true);
              };

              return (
                <Link to={TRACKS} key={`${item.url}`} className={styles.link}>
                  <ListedElement
                    key={`${item.url}`}
                    onClick={
                      listedElementType === EListedElementTypes.ALBUM
                        ? () => handleAlbumOnClick()
                        : () => handleSongOnClick()
                    }
                    image={item.coverImage}
                    name={item.title}
                    artist={artistInfo?.name}
                    type={listedElementType}
                  />
                </Link>
              );
            })}
          </Slider>
        </div>
      ) : (
        <ul>
          <ListItems items={items} type={type} />
        </ul>
      )}
    </div>
  );
};

export default List;
