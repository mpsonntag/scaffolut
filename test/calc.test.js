/*
 * Unit tests for src/calc.js
 */

import { describe, it } from "mocha"
import { assert } from "chai"

import { sumReturn } from "../src/calc.js"

describe("Testing simple function", () => {
    const one = 1
    const two = 2
    it("test simple math", () => {
        assert.isOk(two === sumReturn(one, one), "This should always pass")
        assert.isNotOk(two === sumReturn(one, two), "This should always fail")
    })
})

