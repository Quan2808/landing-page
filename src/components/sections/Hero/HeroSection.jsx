import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import useVideoControls from "@hooks/useVideoControls";
import useCountdownToRelease from "@hooks/useCountdownToRelease";
import tb from "@images/thumbnail.jpg";
import trailer from "@/assets/videos/trailer-2.mp4";
const HeroSection = () => {
  const {
    videoRef,
    isPlaying,
    isMuted,
    showThumbnail,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    handleVideoEnd,
  } = useVideoControls();
  const timeLeft = useCountdownToRelease("2025-07-23T00:00:00");

  return (
    <section className="relative isolate overflow-hidden h-screen">
      {/* Video Background */}
      <div className="absolute inset-0">
        {showThumbnail && (
          <img
            alt="Video Thumbnail"
            src={tb}
            className="absolute inset-0 w-full h-full object-cover object-top"
            aria-hidden="true"
          />
        )}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showThumbnail ? "opacity-0" : "opacity-100"
          }`}
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnd}
          onPlay={() => !showThumbnail}
        >
          <source src={trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Video Controls - Bottom Right */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12">
        <div className="flex items-center space-x-6">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="group relative flex items-center justify-center w-14 h-14 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-white/30"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
            <div className="absolute inset-0 rounded-full ring-2 ring-white/70 opacity-0 group-hover:opacity-100 group-hover:ring-white transition-all duration-300 scale-110"></div>
          </button>

          {/* Volume Button */}
          <button
            onClick={toggleMute}
            className="group relative flex items-center justify-center w-14 h-14 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-white/30"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
            <div className="absolute inset-0 rounded-full ring-2 ring-white/70 opacity-0 group-hover:opacity-100 group-hover:ring-white transition-all duration-300 scale-110"></div>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="group relative flex items-center justify-center w-14 h-14 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-white/30"
            aria-label="Enter fullscreen"
          >
            <Maximize2 className="w-6 h-6 text-white" />
            <div className="absolute inset-0 rounded-full ring-2 ring-white/70 opacity-0 group-hover:opacity-100 group-hover:ring-white transition-all duration-300 scale-110"></div>
          </button>
        </div>
      </div>

      {/* Gradient overlay at bottom for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
