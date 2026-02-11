import { ArrowLeft, Share2, Shield, X } from 'lucide-react';
import type { Profile } from '@/data/profiles';

interface ProfileDetailModalProps {
  profile: Profile;
  onClose: () => void;
  onRequestTelegram: (profile: Profile) => void;
}

const ProfileDetailModal = ({ profile, onClose, onRequestTelegram }: ProfileDetailModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in duration-200">
      {/* Hero image */}
      <div className="relative h-[55vh] min-h-[320px]">
        <img
          src={profile.image}
          alt={`${profile.name}'s profile`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Profile info floating card */}
      <div className="relative -mt-16 px-4 pb-28 max-w-lg mx-auto">
        <div className="glass-card p-6 space-y-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">
                {profile.name}, {profile.age}
              </h2>
              {profile.verified && (
                <Shield className="w-5 h-5 text-primary" fill="currentColor" />
              )}
            </div>
            <p className="text-muted-foreground">{profile.city}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.about}</p>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {profile.gallery.map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt={`${profile.name} gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Trust & Safety */}
          <div className="bg-muted rounded-xl p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-foreground">Trust & Safety</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Requests are reviewed to protect everyone. Contact information is only shared after mutual approval.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-border">
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => onRequestTelegram(profile)}
            className="w-full h-12 rounded-xl text-sm font-semibold text-primary-foreground gradient-primary hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            Request Telegram
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailModal;
