import { Toaster } from '@/components/ui/sonner';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem, SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';
import { toast } from 'sonner';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const { flash } = usePage<SharedData>().props;

    if (flash.success) {
        toast.success(flash.success);
    }
    if (flash.error) {
        toast.error(flash.error);
    }
    if (flash.info) {
        toast.info(flash.info);
    }
    if (flash.warning) {
        toast.warning(flash.warning);
    }

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            <Toaster richColors position="top-right" closeButton />
            {children}
        </AppLayoutTemplate>
    );
};
