'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    SimplybookWidget: new (config: Record<string, unknown>) => void;
  }
}

function BookingWidget() {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//widget.simplybook.me/v2/widget/widget.js';
    script.onload = () => {
      if (window.SimplybookWidget) {
        new window.SimplybookWidget({
          widget_type: 'iframe',
          url: 'https://galloshines.simplybook.me',
          theme: 'minimal',
          theme_settings: {
            timeline_show_end_time: '1',
            timeline_modern_display: 'as_slots',
            hide_company_label: '0',
            timeline_hide_unavailable: '1',
            hide_past_days: '0',
            sb_base_color: '#5ea3aa',
            btn_color_1: '#30d4d1,#0ca5b2,#0ca5b2',
            link_color: '#5ea3aa',
            display_item_mode: 'block',
            body_bg_color: '#f7f7f7',
            sb_review_image: '1',
            sb_review_image_preview:
              '/uploads/galloshines/image_files/preview/bb6d2aad939e88ff5810e1fab192c778.png',
            dark_font_color: '#2b212b',
            light_font_color: '#ffffff',
            sb_company_label_color: '#ffffff',
            hide_img_mode: '1',
            sb_busy: '#c7b3b3',
            sb_available: '#2b212b',
          },
          timeline: 'modern',
          datepicker: 'top_calendar',
          is_rtl: false,
          app_config: {
            clear_session: 0,
            allow_switch_to_ada: 0,
            predefined: [],
          },
          container_id: 'sbw_jiivqu',
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="//widget.simplybook.me/v2/widget/widget.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div id="sbw_jiivqu" ref={widgetContainerRef} className="min-h-[600px]" />
  );
}

export default BookingWidget;
