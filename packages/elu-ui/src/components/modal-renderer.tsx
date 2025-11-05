'use client';

import { ArrowLeft, Loader2 } from 'lucide-react';

import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog';
import { useModalSlot } from './modal-provider';

// 特殊 symbol 用來表示返回上一層
export const MODAL_BACK = Symbol('MODAL_BACK');

interface ConfirmModalPayload {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  backText?: string;
  variant?: 'default' | 'destructive' | 'accent';
  showBack?: boolean;
  confirmLoadingText?: string;
  onConfirm?: () => Promise<unknown> | unknown;
  defaultResult?: unknown;
}

export const ConfirmModal = () => {
  const slot = useModalSlot<ConfirmModalPayload>('app', 'confirm');

  if (!slot) return null;

  const {
    title,
    description,
    confirmText = '確認',
    cancelText = '取消',
    backText = '返回',
    variant = 'default',
    showBack = false,
    confirmLoadingText = '處理中...',
    onConfirm,
    defaultResult = true,
  } = slot.payload;

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open && !slot.isResolving) {
          slot.close(false);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {showBack && (
              <Button
                size="icon"
                variant="ghost"
                className="size-6"
                onClick={() => slot.close(MODAL_BACK)}
                disabled={slot.isResolving}
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}
            {title}
          </DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              if (slot.isResolving) return;
              slot.close(false);
            }}
            disabled={slot.isResolving}
          >
            {cancelText}
          </Button>
          <Button
            variant={variant}
            className="flex items-center justify-center gap-2"
            onClick={() => {
              if (slot.isResolving) return;
              if (onConfirm) {
                void slot
                  .resolveWith(async () => {
                    const result = await onConfirm();
                    return typeof result === 'undefined' ? defaultResult : result;
                  })
                  .catch((error) => {
                    console.error('Modal confirm handler failed', error);
                  });
                return;
              }
              slot.close(defaultResult);
            }}
            disabled={slot.isResolving}
          >
            {slot.isResolving ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                {confirmLoadingText}
              </>
            ) : (
              confirmText
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface AlertModalPayload {
  title: string;
  description?: string;
  buttonText?: string;
}

export const AlertModal = () => {
  const slot = useModalSlot<AlertModalPayload>('app', 'alert');

  if (!slot) return null;

  const { title, description, buttonText = '確定' } = slot.payload;

  return (
    <Dialog open onOpenChange={() => slot.close()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => slot.close()} disabled={slot.isResolving}>
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface InputModalPayload {
  title: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
  confirmText?: string;
  cancelText?: string;
  backText?: string;
  showBack?: boolean;
}

export const InputModal = () => {
  const slot = useModalSlot<InputModalPayload>('app', 'input');

  if (!slot) return null;

  const {
    title,
    description,
    placeholder = '',
    defaultValue = '',
    confirmText = '確認',
    cancelText = '取消',
    showBack = false,
  } = slot.payload;

  return (
    <Dialog open onOpenChange={() => slot.close(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {showBack && (
              <Button
                size="icon"
                variant="ghost"
                className="size-6"
                onClick={() => slot.close(MODAL_BACK)}
                disabled={slot.isResolving}
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}
            {title}
          </DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="py-4">
          <input
            id="modal-input"
            type="text"
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="border-primary bg-secondary text-primary placeholder:text-primary/40 w-full rounded-md border-2 px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20"
            autoFocus
          />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => slot.close(null)}
            disabled={slot.isResolving}
          >
            {cancelText}
          </Button>
          <Button
            onClick={() => {
              const input = document.getElementById(
                'modal-input'
              ) as HTMLInputElement;
              slot.close(input?.value || '');
            }}
            disabled={slot.isResolving}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Modal Container - 統一渲染所有 modals
export const ModalContainer = () => {
  return (
    <>
      <ConfirmModal />
      <AlertModal />
      <InputModal />
    </>
  );
};
