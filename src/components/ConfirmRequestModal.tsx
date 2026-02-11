import { X } from 'lucide-react';

interface ConfirmRequestModalProps {
  profileName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmRequestModal = ({ profileName, onConfirm, onCancel }: ConfirmRequestModalProps) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-sm p-6 space-y-4 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">Send Request?</h3>
          <button
            onClick={onCancel}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground">
          If approved, you'll receive a Telegram link to contact {profileName}.
        </p>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onCancel}
            className="flex-1 h-11 rounded-xl text-sm font-medium border border-border text-muted-foreground hover:bg-muted transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 h-11 rounded-xl text-sm font-semibold text-primary-foreground gradient-primary hover:opacity-90 transition-all duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRequestModal;
