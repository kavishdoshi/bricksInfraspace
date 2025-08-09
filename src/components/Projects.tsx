import Image from "next/image";
import Link from "next/link";
import { DRIVE_FILE_IDS, driveImageSrc, drivePreviewSrc } from "@/lib/drive";

export function Projects() {
  const items = DRIVE_FILE_IDS;
  return (
    <section id="projects" className="section-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Selected Projects</h2>
          <p className="text-sm text-muted-foreground max-w-[52ch]">
            A snapshot of homes, interiors, and commercial spaces delivered with quality and detail.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="card card-base p-8">
            <p className="text-sm text-muted-foreground">
              Add Google Drive file IDs in <code className="px-1 py-0.5 rounded bg-[var(--surface-muted)]">src/lib/drive.ts</code> to populate the gallery.
            </p>
            <ol className="list-decimal list-inside mt-3 text-sm text-muted-foreground">
              <li>Open your Drive folder and copy a photo or video share link.</li>
              <li>Extract the file ID (the long string between /d/ and /view).</li>
              <li>Insert it into the exported array with kind: &quot;image&quot; or &quot;video&quot;.</li>
            </ol>
            <div className="mt-4">
              <Link href="https://drive.google.com/drive/folders/1-GYU_sQwf4JO5oPG1o_YUZMUdkCDF9_w" target="_blank" className="text-sm underline underline-offset-4">Open Drive folder</Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <figure key={p.id} className="card card-base overflow-hidden">
                {p.kind === "video" ? (
                  <div className="relative aspect-video">
                    <iframe
                      src={drivePreviewSrc(p.id)}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={p.title || "Project video"}
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={driveImageSrc(p.id)}
                      alt={p.title || "Project photo"}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                {(p.title || p.location) && (
                  <figcaption className="p-4 flex items-center justify-between text-sm">
                    <div>
                      {p.title && <div className="font-medium">{p.title}</div>}
                      {p.location && (
                        <div className="text-muted-foreground">{p.location}</div>
                      )}
                    </div>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
