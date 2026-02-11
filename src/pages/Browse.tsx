import { useState } from 'react';
import { profiles, type Profile } from '@/data/profiles';
import ProfileCard from '@/components/ProfileCard';
import ProfileDetailModal from '@/components/ProfileDetailModal';
import ConfirmRequestModal from '@/components/ConfirmRequestModal';
import { useToast } from '@/hooks/use-toast';

const Browse = () => {
  const { toast } = useToast();
  const [skipped, setSkipped] = useState<Set<string>>(new Set());
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [confirmProfile, setConfirmProfile] = useState<Profile | null>(null);

  const visibleProfiles = profiles.filter((p) => !skipped.has(p.id));

  const handleSkip = (id: string) => {
    setSkipped((prev) => new Set(prev).add(id));
  };

  const handleRequestTelegram = (profile: Profile) => {
    setSelectedProfile(null);
    setConfirmProfile(profile);
  };

  const handleConfirmRequest = () => {
    toast({
      title: 'Request submitted ✓',
      description: `Your request to ${confirmProfile?.name} has been sent.`,
    });
    setConfirmProfile(null);
  };

  return (
    <>
      <div className="px-4 py-6 max-w-3xl mx-auto relative z-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground animate-fade-in">Discover</h1>
          <p className="text-sm text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {visibleProfiles.length} profiles near you
          </p>
        </div>

        {visibleProfiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visibleProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onViewProfile={setSelectedProfile}
                onRequestTelegram={handleRequestTelegram}
                onSkip={handleSkip}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <span className="text-3xl">🌸</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">No profiles right now</h3>
            <p className="text-sm text-muted-foreground mt-1">Check back soon for new people!</p>
            <button
              onClick={() => setSkipped(new Set())}
              className="mt-4 h-10 px-6 rounded-xl text-sm font-medium gradient-primary text-primary-foreground hover:opacity-90 transition-all"
            >
              Reset skipped
            </button>
          </div>
        )}
      </div>

      {selectedProfile && (
        <ProfileDetailModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onRequestTelegram={handleRequestTelegram}
        />
      )}

      {confirmProfile && (
        <ConfirmRequestModal
          profileName={confirmProfile.name}
          onConfirm={handleConfirmRequest}
          onCancel={() => setConfirmProfile(null)}
        />
      )}
    </>
  );
};

export default Browse;
