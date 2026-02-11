import { useState } from 'react';
import { initialRequests, type Request } from '@/data/profiles';
import { Clock, CheckCircle, XCircle, ExternalLink, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const statusConfig = {
  pending: { label: 'Pending', class: 'status-pending', icon: Clock },
  approved: { label: 'Approved', class: 'status-approved', icon: CheckCircle },
  rejected: { label: 'Rejected', class: 'status-rejected', icon: XCircle },
};

const Requests = () => {
  const { toast } = useToast();
  const [requests] = useState<Request[]>(initialRequests);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopy = (handle: string) => {
    navigator.clipboard.writeText(handle);
    toast({ title: 'Copied!', description: `${handle} copied to clipboard.` });
  };

  return (
    <div className="px-4 py-6 max-w-lg mx-auto relative z-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Requests</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Track your connection requests
        </p>
      </div>

      <div className="space-y-3">
        {requests.map((req) => {
          const config = statusConfig[req.status];
          const StatusIcon = config.icon;
          const isExpanded = expandedId === req.id && req.status === 'approved';

          return (
            <div key={req.id}>
              <button
                onClick={() =>
                  req.status === 'approved'
                    ? setExpandedId(isExpanded ? null : req.id)
                    : undefined
                }
                className={`glass-card w-full p-4 flex items-center gap-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  req.status === 'approved' ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <img
                  src={req.image}
                  alt={req.name}
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{req.name}</h3>
                  <p className="text-xs text-muted-foreground">{req.city}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{req.submittedAt}</p>
                </div>
                <span
                  className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${config.class}`}
                >
                  <StatusIcon className="w-3 h-3" />
                  {config.label}
                </span>
              </button>

              {/* Expanded approved detail */}
              {isExpanded && req.telegramHandle && (
                <div className="glass-card mt-1 p-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
                  <div className="flex gap-2">
                    <a
                      href={`https://t.me/${req.telegramHandle.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-11 rounded-xl text-sm font-semibold text-primary-foreground gradient-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open on Telegram
                    </a>
                    <button
                      onClick={() => handleCopy(req.telegramHandle!)}
                      className="h-11 px-4 rounded-xl text-sm font-medium border border-border text-muted-foreground hover:bg-muted transition-colors flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                  </div>
                </div>
              )}

              {/* Pending animation */}
              {req.status === 'pending' && (
                <p className="text-xs text-muted-foreground mt-1 ml-1 flex items-center gap-1">
                  Waiting for approval
                  <span className="inline-flex gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
