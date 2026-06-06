import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	const { hostname, pathname, search } = context.url;

	if (hostname === "kshadp.com") {
		return context.redirect(`https://www.kshadp.com${pathname}${search}`, 301);
	}

	return next();
});
