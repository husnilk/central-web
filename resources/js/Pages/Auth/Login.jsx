import {useEffect, useState} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import {cn} from '@/shadcn.js'
import {Input} from "@/shadcn/ui/input.jsx";
import {Label} from "@/shadcn/ui/label.jsx";
import {Button} from "@/shadcn/ui/button.jsx";

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="lg:p-8">
                <div className="mx-auto flex w-auto flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login to Your account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your credentials below to login
                        </p>
                        <div className="grid gap-6">
                            <form onSubmit={submit}>
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <Label className="sr-only" htmlFor="email">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            placeholder="name@example.com"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label className="sr-only" htmlFor="password">
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            placeholder="Password"
                                            type="password"
                                            autoCapitalize="none"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            onChange={(e) => setData('password', e.target.value)}
                                        />
                                    </div>
                                    <Button disabled={isLoading}>
                                        Sign In
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*<form onSubmit={submit}>*/}
            {/*    <div>*/}
            {/*        <InputLabel htmlFor="email" value="Email" />*/}

            {/*        <TextInput*/}
            {/*            id="email"*/}
            {/*            type="email"*/}
            {/*            name="email"*/}
            {/*            value={data.email}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="username"*/}
            {/*            isFocused={true}*/}
            {/*            onChange={(e) => setData('email', e.target.value)}*/}
            {/*        />*/}

            {/*        <InputError message={errors.email} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="password" value="Password" />*/}

            {/*        <TextInput*/}
            {/*            id="password"*/}
            {/*            type="password"*/}
            {/*            name="password"*/}
            {/*            value={data.password}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="current-password"*/}
            {/*            onChange={(e) => setData('password', e.target.value)}*/}
            {/*        />*/}

            {/*        <InputError message={errors.password} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="block mt-4">*/}
            {/*        <label className="flex items-center">*/}
            {/*            <Checkbox*/}
            {/*                name="remember"*/}
            {/*                checked={data.remember}*/}
            {/*                onChange={(e) => setData('remember', e.target.checked)}*/}
            {/*            />*/}
            {/*            <span className="ms-2 text-sm text-gray-600">Remember me</span>*/}
            {/*        </label>*/}
            {/*    </div>*/}

            {/*    <div className="flex items-center justify-end mt-4">*/}
            {/*        {canResetPassword && (*/}
            {/*            <Link*/}
            {/*                href={route('password.request')}*/}
            {/*                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
            {/*            >*/}
            {/*                Forgot your password?*/}
            {/*            </Link>*/}
            {/*        )}*/}

            {/*        <PrimaryButton className="ms-4" disabled={processing}>*/}
            {/*            Log in*/}
            {/*        </PrimaryButton>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </GuestLayout>
    );
}
