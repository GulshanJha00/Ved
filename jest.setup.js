import '@testing-library/jest-dom'

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;