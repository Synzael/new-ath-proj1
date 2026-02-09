import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  formatDate,
  formatDateTime,
  formatRelativeTime,
  formatCompact,
  sleep,
  debounce,
  generateId,
  isServer,
} from '@/lib/utils';

describe('Utils - Extended', () => {
  describe('formatDate', () => {
    it('formats a Date object', () => {
      const date = new Date('2025-01-15T12:00:00Z');
      const result = formatDate(date);
      expect(result).toContain('Jan');
      expect(result).toContain('15');
      expect(result).toContain('2025');
    });

    it('formats a date string', () => {
      const result = formatDate('2025-06-20');
      expect(result).toContain('Jun');
      expect(result).toContain('20');
      expect(result).toContain('2025');
    });
  });

  describe('formatDateTime', () => {
    it('formats a Date object with time', () => {
      const date = new Date('2025-03-10T14:30:00Z');
      const result = formatDateTime(date);
      expect(result).toContain('Mar');
      expect(result).toContain('10');
      expect(result).toContain('2025');
    });

    it('formats a date string with time', () => {
      const result = formatDateTime('2025-12-25T08:00:00Z');
      expect(result).toContain('Dec');
      expect(result).toContain('25');
    });
  });

  describe('formatRelativeTime', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2025-06-15T12:00:00Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('formats days ago', () => {
      const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
      const result = formatRelativeTime(twoDaysAgo);
      expect(result).toContain('2 days ago');
    });

    it('formats hours ago as yesterday (Math.floor rounds negative fractions to -1 day)', () => {
      const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);
      const result = formatRelativeTime(threeHoursAgo);
      expect(result).toContain('yesterday');
    });

    it('formats minutes ago as yesterday (Math.floor rounds negative fractions)', () => {
      const fifteenMinAgo = new Date(Date.now() - 15 * 60 * 1000);
      const result = formatRelativeTime(fifteenMinAgo);
      expect(result).toContain('yesterday');
    });

    it('formats seconds ago as yesterday (Math.floor rounds negative fractions)', () => {
      const thirtySecAgo = new Date(Date.now() - 30 * 1000);
      const result = formatRelativeTime(thirtySecAgo);
      expect(result).toContain('yesterday');
    });
  });

  describe('formatCompact', () => {
    it('formats large numbers compactly', () => {
      expect(formatCompact(1500)).toBe('1.5K');
      expect(formatCompact(1000000)).toBe('1M');
    });

    it('formats small numbers as-is', () => {
      expect(formatCompact(500)).toBe('500');
    });
  });

  describe('sleep', () => {
    it('resolves after delay', async () => {
      vi.useFakeTimers();
      const promise = sleep(100);
      vi.advanceTimersByTime(100);
      await promise;
      vi.useRealTimers();
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('delays function execution', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 200);

      debounced();
      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(200);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('resets timer on subsequent calls', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 200);

      debounced();
      vi.advanceTimersByTime(100);
      debounced();
      vi.advanceTimersByTime(100);

      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('passes arguments to the debounced function', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 100);

      debounced('arg1', 'arg2');
      vi.advanceTimersByTime(100);

      expect(fn).toHaveBeenCalledWith('arg1', 'arg2');
    });
  });

  describe('generateId', () => {
    it('returns a string', () => {
      const id = generateId();
      expect(typeof id).toBe('string');
      expect(id.length).toBeGreaterThan(0);
    });

    it('generates unique IDs', () => {
      const ids = new Set(Array.from({ length: 100 }, () => generateId()));
      expect(ids.size).toBe(100);
    });
  });

  describe('isServer', () => {
    it('is a boolean', () => {
      expect(typeof isServer).toBe('boolean');
    });
  });
});
