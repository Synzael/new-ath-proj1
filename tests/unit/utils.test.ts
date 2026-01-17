import { describe, it, expect } from 'vitest';
import {
  cn,
  formatHeight,
  formatWeight,
  formatNumber,
  formatCurrency,
  formatPercent,
  getInitials,
  slugify,
  truncate,
} from '@/lib/utils';

describe('Utils', () => {
  describe('cn', () => {
    it('should merge class names', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('should handle conditional classes', () => {
      expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
    });

    it('should merge conflicting Tailwind classes', () => {
      expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
    });
  });

  describe('formatHeight', () => {
    it('should format inches to feet and inches', () => {
      expect(formatHeight(74)).toBe("6'2\"");
      expect(formatHeight(72)).toBe("6'0\"");
      expect(formatHeight(65)).toBe("5'5\"");
    });
  });

  describe('formatWeight', () => {
    it('should format weight in pounds', () => {
      expect(formatWeight(185)).toBe('185 lbs');
      expect(formatWeight(185.5)).toBe('186 lbs');
    });
  });

  describe('formatNumber', () => {
    it('should format numbers with commas', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1234567)).toBe('1,234,567');
    });
  });

  describe('formatCurrency', () => {
    it('should format as USD', () => {
      expect(formatCurrency(1000)).toBe('$1,000.00');
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });
  });

  describe('formatPercent', () => {
    it('should format as percentage', () => {
      expect(formatPercent(50)).toBe('50.0%');
      expect(formatPercent(99.5)).toBe('99.5%');
    });
  });

  describe('getInitials', () => {
    it('should get initials from name', () => {
      expect(getInitials('John Doe')).toBe('JD');
      expect(getInitials('Jane')).toBe('J');
      expect(getInitials('John Paul Smith')).toBe('JP');
    });
  });

  describe('slugify', () => {
    it('should create URL-friendly slugs', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('John Doe!')).toBe('john-doe');
      expect(slugify('  Multiple   Spaces  ')).toBe('multiple-spaces');
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
      expect(truncate('Hi', 10)).toBe('Hi');
    });
  });
});
