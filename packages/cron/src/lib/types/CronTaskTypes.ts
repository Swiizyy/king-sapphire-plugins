import type { CronJobParams } from 'cron';
import type { CronTask } from '../structures/CronTask';

export interface CronTaskHandlerOptions {
	/**
	 * The default timezone to use for all cron tasks.
	 * You can override this per task, using the timeZone option.
	 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
	 * @default "UTC"
	 */
	defaultTimezone?: string;

	/**
	 * The ability to opt-out of instrumenting cron jobs with Sentry.
	 * If you don't use Sentry, you can ignore this option.
	 * @see https://docs.sentry.io/product/crons/
	 * @default undefined // technically false
	 */
	disableSentry?: boolean;
}

export type CronJobOptions = Omit<CronJobParams<null, CronTask>, 'onTick' | 'onComplete' | 'start' | 'context' | 'utcOffset'>;
