import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
          <div className="flex items-center gap-2">
            <div className="flex items-end">
              <span className="text-2xl font-bold text-teal-400">&gt;</span>
              <span className="text-2xl font-bold text-teal-400 -ml-0.5">_</span>
            </div>
            <div className="flex items-baseline">
              <span className="font-bold text-xl text-teal-400">BestOf</span>
              <span className="font-bold text-xl text-blue-500">LINUX<span className="text-teal-400">.org</span></span>
            </div>
          </div>
      </>
    ),
  },
};
