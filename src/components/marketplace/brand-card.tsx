import Link from 'next/link';
import { ExternalLink, Building2, FileText, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BrandCardProps {
  brand: {
    id: string;
    companyName: string;
    industry: string | null;
    website: string | null;
    description: string | null;
    logo: string | null;
    verified: boolean;
    offerCount: number;
    user: {
      name: string | null;
      image: string | null;
    };
  };
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={brand.logo || brand.user.image || undefined} alt={brand.companyName} />
            <AvatarFallback>
              <Building2 className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold truncate">{brand.companyName}</h3>
              {brand.verified && (
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-label="Verified" />
              )}
            </div>
            {brand.industry && (
              <Badge variant="secondary" className="mt-1">
                {brand.industry}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {brand.description && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {brand.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <FileText className="h-4 w-4" aria-hidden="true" />
            {brand.offerCount} active offers
          </span>
        </div>

        <div className="flex gap-2">
          <Link href={`/marketplace/${brand.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Offers
            </Button>
          </Link>
          {brand.website && (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="ghost" size="icon" aria-label="Visit website">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
