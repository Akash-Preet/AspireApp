<template>
  <div class="q-pa-md info-box__accordian">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Recent Transactions"
        :disable="off"
        default-opened
        class="info-box__accordian--item"
      >
        <q-card>
          <q-card-section>
            <div
              class="row"
              style="height: 10rem"
              v-for="(trans, index) in transactions"
              :key="index"
            >
              <div
                class="col-4 flex items-center justify-center"
                :class="
                  trans.category === 'Shopping'
                    ? 'transaction__shopping '
                    : trans.category === 'Travel'
                    ? 'transaction__travel'
                    : trans.category === 'Other'
                    ? 'transaction__other'
                    : ''
                "
              >
                <div
                  v-if="trans.category === 'Shopping'"
                  class="trasaction__shopping"
                >
                  <svg
                    class="shopping"
                    style="fill: #23cefd"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15.205"
                    viewBox="0 0 16 15.205"
                  >
                    <g transform="translate(0 -11.008)">
                      <g transform="translate(0.798 15.853)">
                        <g transform="translate(0 0)">
                          <path
                            class="a"
                            d="M22.016,146.176v9.766a.6.6,0,0,0,.592.594h13.2a.6.6,0,0,0,.592-.594v-9.766Zm10.188,3.75a.6.6,0,0,1-.592.594H26.8a.6.6,0,0,1-.592-.594V148.72a.6.6,0,0,1,.592-.594h4.807a.6.6,0,0,1,.592.594Z"
                            transform="translate(-22.016 -146.176)"
                          />
                        </g>
                      </g>
                      <g transform="translate(0 11.008)">
                        <g transform="translate(0 0)">
                          <path
                            class="a"
                            d="M15.39,11.008H.592A.6.6,0,0,0,0,11.6v3.509H16v-3.49A.617.617,0,0,0,15.39,11.008Z"
                            transform="translate(0 -11.008)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  v-else-if="trans.category === 'Travel'"
                  class="trasaction__travel"
                >
                  <svg
                    class="travel"
                    style="fill: #01d167"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.001"
                    height="16"
                    viewBox="0 0 16.001 16"
                  >
                    <g transform="translate(0 -0.016)">
                      <path
                        class="a"
                        d="M15.848,2A1.678,1.678,0,0,0,15.71.307,1.679,1.679,0,0,0,14.021.17,4.984,4.984,0,0,0,12.057,1.4L10.23,3.23,2.638,1.414a.332.332,0,0,0-.342.091L.834,2.967a.352.352,0,0,0-.1.308.383.383,0,0,0,.194.274l5.8,3.185L3.768,9.692l-2.215-.6a.235.235,0,0,0-.091-.012.355.355,0,0,0-.263.1L.1,10.285a.391.391,0,0,0-.1.285.341.341,0,0,0,.148.263l2.877,2.158,2.158,2.877a.411.411,0,0,0,.274.149h.023a.356.356,0,0,0,.263-.1l1.1-1.1a.348.348,0,0,0,.091-.354l-.605-2.215L9.283,9.292l3.185,5.8a.316.316,0,0,0,.24.183.251.251,0,0,0,.08.011A.323.323,0,0,0,13,15.218l1.462-1.1a.346.346,0,0,0,.137-.377L12.777,5.8l1.838-1.838A4.987,4.987,0,0,0,15.848,2Z"
                        transform="translate(0 0)"
                      />
                    </g>
                  </svg>
                </div>
                <div v-else class="trasaction__other">
                  <svg
                    style="fill: #f25195"
                    class="other"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="13.954"
                    viewBox="0 0 16 13.954"
                  >
                    <path
                      class="a"
                      d="M461.668,106.512v5.271a2.989,2.989,0,0,0,0-5.271Zm0,0"
                      transform="translate(-447.247 -103.191)"
                    />
                    <path
                      class="a"
                      d="M5.04,101.18V95.2H1.73A1.732,1.732,0,0,0,0,96.93v2.52a1.732,1.732,0,0,0,1.73,1.73Zm0,0"
                      transform="translate(0 -92.233)"
                    />
                    <path
                      class="a"
                      d="M196.75,0a1.53,1.53,0,0,0-.626.142l-5.757,2.579a.465.465,0,0,1,.009.093V9.086a.466.466,0,0,1-.009.093l5.756,2.579a1.53,1.53,0,0,0,.626.142h0a1.135,1.135,0,0,0,.87-.385,1.376,1.376,0,0,0,.316-.924V1.309A1.2,1.2,0,0,0,196.75,0Zm0,0"
                      transform="translate(-184.438)"
                    />
                    <path
                      class="a"
                      d="M32.889,312.787a2.665,2.665,0,0,1-.721-.1l.517,2.585a2.065,2.065,0,0,0,1.968,1.614,1.732,1.732,0,0,0,1.73-1.73V312.8l-.018-.008Zm0,0"
                      transform="translate(-31.159 -302.932)"
                    />
                  </svg>
                </div>
              </div>
              <div class="col-8">
                <div class="row">
                  <div class="col-6" style="padding-left: 1rem">
                    {{ trans.trans_name }}
                  </div>
                  <div class="col-6">
                    <p
                      style="text-align: right"
                      :class="
                        trans.isCredited ? 'text-secondary' : 'text-primary'
                      "
                    >
                      {{
                        `${trans.isCredited ? '+' : '-'} ${
                          trans.trans_currency
                        } ${trans.trans_amount}`
                      }}
                    </p>
                  </div>
                  <div class="col-12" style="padding-left: 1rem">
                    {{ trans.date }}
                  </div>
                  <div class="col-12" style="padding-left: 1rem">
                    {{
                      trans.isCredited
                        ? 'Refund on debit card'
                        : 'Charged to debit card'
                    }}
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script lang="ts">
import { useStore } from 'src/store';
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['off'],
  setup() {
    const $store = useStore();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    let transactions = $store.getters['cardModule/getTransaction'];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { transactions };
  },
});
</script>

<style lang="scss" scoped>
.info-box__accordian {
  max-width: 35rem;
  @media screen and (max-width: $breakpoint-xs-max) {
    max-width: 41.4rem;
    margin: 0px auto;
    padding-left: 0px;
    padding-right: 0px;
  }
}
.info-box__accordian--item {
  background: #f5f9ff;
  border: 0.1rem solid #f5f5f5;
  font-size: 1.4rem;
  color: $primary;
}

.transaction__shopping {
  background: #009dff1a;
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
}
.transaction__travel {
  background: #00d6b51a;
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
}
.transaction__other {
  background: #f251951a;
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
}
</style>
