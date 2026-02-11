import { Shield } from 'lucide-react';
import type { Profile } from '@/data/profiles';

interface ProfileCardProps {
  profile: Profile;
  onViewProfile: (profile: Profile) => void;
  onRequestTelegram: (profile: Profile) => void;
  onSkip: (profileId: string) => void;
}

const ProfileCard = ({ profile, onViewProfile, onRequestTelegram, onSkip }: ProfileCardProps) => {
  return (
    <div
      className="glass-card overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer group"
      onClick={() => onViewProfile(profile)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
        <img
          src={profile.image}
          alt={`${profile.name}'s profile photo`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white">
              {profile.name}, {profile.age}
            </h3>
            {profile.verified && (
              <Shield className="w-4 h-4 text-blue-400" fill="currentColor" />
            )}
          </div>
          <p className="text-sm text-white/80">{profile.city}</p>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{profile.bio}</p>

        <div className="flex flex-wrap gap-1.5">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onRequestTelegram(profile)}
            className="flex-1 h-11 rounded-xl text-sm font-semibold text-primary-foreground gradient-primary hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            Request Telegram
          </button>
          <button
            onClick={() => onSkip(profile.id)}
            className="h-11 px-5 rounded-xl text-sm font-medium border border-border text-muted-foreground hover:bg-muted transition-colors duration-200"
          >
            Skip
          </button>
        </div>

        <p className="text-[10px] text-muted-foreground text-center flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" />
          Contact shared only after approval.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
