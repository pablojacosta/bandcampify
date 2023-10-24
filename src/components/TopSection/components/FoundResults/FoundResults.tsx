import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import styles from "./FoundResults.module.scss";
import { IFoundResults } from "interfaces/foundResult";
import ListedElement from "@components/shared/ListedElement";
import {
  EListType,
  EListedElementTypes,
  ESearchResultTypes,
} from "@constants/enums";
import { useEffect, useState } from "react";
import { IResult } from "interfaces/result";
import ResultList from "./components/ResultList";
import { Link } from "react-router-dom";
import { ALBUMS } from "@constants/routes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "@components/shared/NextArrow";
import PrevArrow from "@components/shared/PrevArrow";

const FoundResults = ({ foundResults }: IFoundResults) => {
  const { getAlbums } = useGetArtistAlbums();
  const isError = typeof foundResults === "string";
  const [artists, setArtists] = useState<IResult[]>([]);
  const [albums, setAlbums] = useState<IResult[]>([]);
  const [tracks, setTracks] = useState<IResult[]>([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "100px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          centerPadding: "65px",
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          centerPadding: "100px",
          centerMode: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 563,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    if (isError) {
      return;
    }
    setArtists(
      foundResults.filter((result) => result.type === ESearchResultTypes.ARTIST)
    );
    setAlbums(
      foundResults.filter((result) => result.type === ESearchResultTypes.ALBUM)
    );
    setTracks(
      foundResults.filter((result) => result.type === ESearchResultTypes.TRACK)
    );
  }, [foundResults, isError]);

  const hasArtists = artists.length > 0;
  const hasAlbums = albums.length > 0;
  const hasTracks = tracks.length > 0;

  return (
    <div className={styles.foundResults}>
      {!isError ? (
        <>
          {hasArtists && (
            <>
              <h2>Artists</h2>
              {foundResults.length && (
                <div className={styles.slider}>
                  <Slider {...sliderSettings}>
                    {foundResults
                      .filter(
                        (result) => result.type === ESearchResultTypes.ARTIST
                      )
                      .map((artist, index) => (
                        <Link to={ALBUMS} key={`${artist.url}_${index}`}>
                          <ListedElement
                            key={`${artist.name}_${artist.genre}`}
                            onClick={() =>
                              getAlbums(artist.url, artist.imageUrl)
                            }
                            image={artist.imageUrl}
                            name={artist.name}
                            type={EListedElementTypes.ARTIST}
                          />
                        </Link>
                      ))}
                  </Slider>
                </div>
              )}
            </>
          )}
          {hasAlbums && <ResultList items={albums} type={EListType.ALBUMS} />}
          {hasTracks && <ResultList items={tracks} type={EListType.SONGS} />}
        </>
      ) : (
        <h2>{foundResults}</h2>
      )}
    </div>
  );
};

export default FoundResults;
