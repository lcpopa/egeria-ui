/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */

export const RoleComponentsBehavior = {
  properties: {
    components: {
      type: Array,
      value: null
    }
  },

  _hasComponent(component) {
    return this.components.includes("*") || this.components.includes(component);
  }
}
