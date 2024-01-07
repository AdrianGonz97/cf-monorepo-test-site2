import { TEST_SECRET } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return { secret: TEST_SECRET };
};