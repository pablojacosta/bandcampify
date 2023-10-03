/* eslint-disable @typescript-eslint/no-explicit-any */
import AlbumsList from "@components/AlbumsList";
import ArtistInput from "@components/ArtistInput";
import SearchArtistButton from "@components/SearchArtistButton";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [filteredArtist, setFilteredArtist] = useState("");
  const [returnedArtistData, setReturnedArtistData] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedAlbumArtist, setSelectedAlbumArtist] = useState("");
  const [selectedAlbumId, setSelectedAlbumId] = useState<number>();
  const [selectedAlbumUrl, setSelectedAlbumUrl] = useState("");
  const [selectedAlbumName, setSelectedAlbumName] = useState("");
  const [selectedTrackId, setSelectedTrackId] = useState("");
  const [artistError, setArtistError] = useState(false);

  const [showTracks, setShowTracks] = useState(false);
  const [albumNameToShowTracks, setalbumNameToShowTracks] = useState("");
  const [plusToggle, setPlusToggle] = useState(false);

  const handleArtistFilterChange = (event: any) => {
    setFilteredArtist(event.target.value);
  };

  const getArtistDataOptions: AxiosRequestConfig<any> = {
    method: "GET",
    url: "http://localhost:3001/artist",
    params: { artist: `${filteredArtist}` },
  };

  console.log("-----------------------------");
  console.log("selectedTrackId", selectedTrackId);
  console.log("plusToggle", plusToggle);
  console.log("-----------------------------");

  useEffect(() => {
    document.title = "Band-Campify Player";
  }, []);

  // const getArtistData = (filteredArtist: string) => {
  const getArtistData = () => {
    setArtistError(false);
    setPlusToggle(false);
    setLoading(true);
    axios
      .request(getArtistDataOptions)
      .then((response): any => {
        if (typeof response.data === "string") {
          setArtistError(true);
        }
        setReturnedArtistData(response.data);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setArtistError(false);
      setPlusToggle(false);
      setLoading(true);
      axios
        .request(getArtistDataOptions)
        .then((response): any => {
          if (typeof response.data === "string") {
            setArtistError(true);
          }
          setReturnedArtistData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    console.log("returnedArtistData", returnedArtistData);
    setLoading(false);
  }, [returnedArtistData]);

  const handlePlayClick = (
    albumArtist: string,
    albumId: number,
    albumName: string,
    albumUrl: string
  ) => {
    setSelectedAlbumArtist(albumArtist);
    setSelectedAlbumId(albumId);
    setSelectedAlbumName(albumName);
    setSelectedAlbumUrl(albumUrl);
    setShowPlayer(true);

    const player: any = document.querySelector("#player");

    let iWindow;

    if (player) {
      iWindow = player.contentWindow;
    }

    const iDocument = iWindow.document;
    iDocument.getElementById("big_play_button").click();
  };

  const handleTrackPlayClick = (
    albumArtist: string,
    albumId: number,
    albumName: string,
    albumUrl: string,
    trackId: number
  ) => {
    setSelectedAlbumArtist(albumArtist);
    setSelectedAlbumId(albumId);
    setSelectedAlbumName(albumName);
    setSelectedAlbumUrl(albumUrl);
    setSelectedTrackId(`/track=${trackId}`);
    setShowPlayer(true);
  };

  const handleAlbumPlusClick = (name: string) => {
    setalbumNameToShowTracks(name);
    setShowTracks(true);
  };

  const handleAlbumMinusClick = (name: string) => {
    setalbumNameToShowTracks(name);
    setShowTracks(false);
  };

  return (
    <div>
      <div>
        <div>Band-Campify Player</div>
      </div>
      {showPlayer ? (
        <div>
          <iframe
            style={{ border: 0, width: 500, height: 250 }}
            title={selectedAlbumName}
            src={`https://bandcamp.com/EmbeddedPlayer/album=${selectedAlbumId}/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/`}
          >
            <a href={selectedAlbumUrl}>
              ${selectedAlbumName} by ${selectedAlbumArtist}
            </a>
          </iframe>
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <div>
          <div>
            <ArtistInput
              handleArtistFilterChange={handleArtistFilterChange}
              filteredArtist={filteredArtist}
              onKeyDown={onKeyDown}
            />
            <SearchArtistButton getArtistData={getArtistData} />
          </div>
          {artistError ? (
            <div>Artist/Band not found. Please try again.</div>
          ) : (
            <>
              {loading ? (
                <div>
                  {/* <Spinner animation="border" variant="light" /> */}
                </div>
              ) : (
                <AlbumsList
                  returnedArtistData={returnedArtistData}
                  handlePlayClick={handlePlayClick}
                  handleTrackPlayClick={handleTrackPlayClick}
                  handleAlbumPlusClick={handleAlbumPlusClick}
                  handleAlbumMinusClick={handleAlbumMinusClick}
                  showTracks={showTracks}
                  albumNameToShowTracks={albumNameToShowTracks}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
