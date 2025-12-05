import React from 'react';
import type { LinkType } from '../types';


// 2. 設定オブジェクトの型定義
interface LinkStyleConfig {
    label: string;
    iconClass?: string; // FontAwesome用
    iconColor?: string;
    isImage?: boolean;  // 画像アイコン（Notion）用
    src?: string;
}

// 3. 各タイプの設定
const LINK_CONFIG: Record<LinkType, LinkStyleConfig> = {
    github: {
        label: 'GitHub',
        iconClass: 'fa-brands fa-github',
        iconColor: '#333',
    },
    youtube: {
        label: 'YouTube',
        iconClass: 'fa-brands fa-youtube',
        iconColor: '#ff0000',
    },
    notion: {
        label: 'Learn more',
        isImage: true,
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    },
    other: {
        label: 'Link',
        iconClass: 'fa-solid fa-arrow-up-right-from-square',
        iconColor: '#333',
    },
};

// 4. Propsの型定義
interface LinkButtonProps {
    label?: string;
    href?: string | null; // URLがない場合は表示しないため null も許容
    type?: LinkType;      // 指定がない場合は 'other' になる
    note?: string;        // "※Notionで詳細を見る" などの補足
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, type = 'other', note, label }) => {
    // hrefが空文字やnull/undefinedの場合は何もレンダリングしない
    if (!href) return null;

    // 万が一未定義のtypeが来た場合のフォールバック
    const config = LINK_CONFIG[type] || LINK_CONFIG.other;

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-link ${type}`}
            onClick={(e) => e.stopPropagation()}
        >
            {config.isImage ? (
            /* 画像アイコンの場合 (Notion) */
            <img 
                src={config.src} 
                alt={config.label} 
                className="link-icon-img" 
            />
            ) : (
                /* FontAwesomeアイコンの場合 */
                <i
                    className={`${config.iconClass} link-icon-fa`}
                ></i>
            )}
            
            <span>{label || config.label}</span>
        </a>

        {/* 補足テキストがある場合のみ表示 */}
        {note && <span className="link-note">{note}</span>}
        </div>
    );
};

export default LinkButton;