'use client';

import { useEffect, useRef } from 'react';

declare global {
    var __VUE_OPTIONS_API__: boolean | undefined;
    var __VUE_PROD_DEVTOOLS__: boolean | undefined;
    var __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: boolean | undefined;
}

export default function N8nChatWeb() {
    const isChatInitialized = useRef(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | undefined;
        let idleId: number | undefined;

        const loadChatStyles = () => {
            if (document.querySelector('link[data-n8n-chat-styles]')) {
                return Promise.resolve();
            }

            return new Promise<void>((resolve) => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '/vendor/n8n-chat/style.css';
                link.dataset.n8nChatStyles = 'true';
                link.onload = () => resolve();
                link.onerror = () => resolve();
                document.head.appendChild(link);
            });
        };

        const initializeChat = async () => {
            if (isChatInitialized.current || !document.querySelector('#n8n-chat')) {
                return;
            }

            isChatInitialized.current = true;

            globalThis.__VUE_OPTIONS_API__ ??= true;
            globalThis.__VUE_PROD_DEVTOOLS__ ??= false;
            globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ ??= false;

            const style = document.createElement('style');
            style.textContent = `:root { --chat--color-primary: #259A72; --chat--color-primary-shade-50: #1F7A5D; --chat--color-primary-shade-100: #155a3c; --chat--color-secondary: #20b69e; --chat--color-secondary-shade-50: #1ca08a; --chat--color-white: #ffffff; --chat--color-light: #f2f4f8; --chat--color-light-shade-50: #e6e9f1; --chat--color-light-shade-100: #c2c5cc; --chat--color-medium: #d2d4d9; --chat--color-dark: #101330; --chat--color-disabled: #777980; --chat--color-typing: #404040; --chat--spacing: 1rem; --chat--border-radius: 0.5rem; --chat--transition-duration: 0.15s; --chat--window--width: 400px; --chat--window--height: 600px; --chat--header-height: auto; --chat--header--padding: var(--chat--spacing); --chat--header--background: var(--chat--color-primary); --chat--header--color: var(--chat--color-white); --chat--header--border-top: none; --chat--header--border-bottom: none; --chat--heading--font-size: 1.5rem; --chat--subtitle--font-size: 1rem; --chat--subtitle--line-height: 1.8; --chat--textarea--height: 50px; --chat--message--font-size: 1rem; --chat--message--padding: var(--chat--spacing); --chat--message--border-radius: var(--chat--border-radius); --chat--message-line-height: 1.8; --chat--message--bot--background: var(--chat--color-white); --chat--message--bot--color: var(--chat--color-dark); --chat--message--bot--border: none; --chat--message--user--background: var(--chat--color-primary); --chat--message--user--color: var(--chat--color-white); --chat--message--user--border: none; --chat--message--pre--background: rgba(0, 0, 0, 0.05); --chat--toggle--background: var(--chat--color-primary); --chat--toggle--hover--background: var(--chat--color-primary-shade-50); --chat--toggle--active--background: var(--chat--color-primary-shade-100); --chat--toggle--color: var(--chat--color-white); --chat--toggle--size: 64px; } `
            document.head.appendChild(style);

            await loadChatStyles();

            const { createChat } = await import('@n8n/chat');

            createChat({
                webhookUrl: 'https://rafawebhook.waichatt.com/webhook/faa8c9c6-5c38-45f1-b9ed-6156ec4b5049/chat',
                webhookConfig: {
                    method: 'POST',
                    headers: {},
                },
                target: '#n8n-chat',
                mode: 'window',
                chatInputKey: 'chatInput',
                chatSessionKey: 'sessionId',
                loadPreviousSession: true,
                metadata: {},
                showWelcomeScreen: false,
                defaultLanguage: 'en',
                initialMessages: [
                    'Hi there! 👋',
                    'My name is Julian. How can I assist you today?',
                ],
                i18n: {
                    en: {
                        title: 'Connect with us',
                        subtitle: 'Start a chat. We are here to help you 24/7.',
                        footer: 'Con tecnología de WaiChatt',
                        getStarted: 'New Conversation',
                        inputPlaceholder: 'Type your question..',
                        closeButtonTooltip: 'Close chat',
                    }
                },
            });
        };

        const scheduleChat = () => {
            if (window.requestIdleCallback) {
                idleId = window.requestIdleCallback(() => initializeChat(), { timeout: 3500 });
                return;
            }

            timeoutId = setTimeout(initializeChat, 2500);
        };

        if (document.readyState === 'complete') {
            scheduleChat();
        } else {
            window.addEventListener('load', scheduleChat, { once: true });
        }

        return () => {
            window.removeEventListener('load', scheduleChat);
            if (timeoutId) clearTimeout(timeoutId);
            if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
        };
    }, []);

    return <div id="n8n-chat" className='select-none'></div>;
}
