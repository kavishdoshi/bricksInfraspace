// Helper to render Google Drive-hosted media
// Replace DRIVE_ITEMS with your own file IDs from public shared links.

export type DriveItem =
  | { kind: "image"; id: string; title?: string; location?: string }
  | { kind: "video"; id: string; title?: string; location?: string };

export function driveImageSrc(id: string) {
  // Use Google's image CDN endpoint for direct image bytes
  // Note: ensure the Drive file is shared publicly (Anyone with the link)
  return `https://lh3.googleusercontent.com/d/${id}=s2048`;
}

export function drivePreviewSrc(id: string) {
  // Drive preview player works for videos and documents; good for iframes
  return `https://drive.google.com/file/d/${id}/preview`;
}

export const DRIVE_FILE_IDS: DriveItem[] = [
  // Example image:
  // { kind: "image", id: "1a2B3cD4eF5GhIjKl", title: "Modern Residence", location: "Ahmedabad" },
  // Example video:
  // { kind: "video", id: "1ZyXwVuTsRqPoNmLk", title: "Walkthrough", location: "Show Flat" },
  { kind: "video", id: "1QwCGFwvX1HS24Ag1bktbP477wAy1odWp", title: "Dutron - Completed", location: "Ahmedabad" },
  { kind: "image", id: "1CZYKG4JdBYbGYUpoyuvmNhiLh11VNzet", title: "Shivalik - OnGoing", location: "Ahmedabad" },
  { kind: "video", id: "1yg3zRqKOYT4RPv-XWlU9qfNnRDQIlU4C", title: "Residence - OnGoing", location: "Ahmedabad" },
  
];
