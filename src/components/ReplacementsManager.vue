<template>
    <div>
        <v-container>
            <v-card>
                <div class="pa-4">
                    <div class="px-4">
                        <v-layout>
                        <v-flex>
                            <v-text-field
                                label="Target Word"
                                v-model="newKey"
                            ></v-text-field>
                        </v-flex>
                        <v-spacer />
                        <v-flex>
                            <v-text-field
                                label="Replacement Word"
                                v-model="newValue"
                            ></v-text-field>
                        </v-flex>
                        <v-spacer />
                        <v-flex xs1 class="text-xs-right">
                            <v-btn @click="addWord">Add</v-btn>
                        </v-flex>
                    </v-layout>
                    </div>

                    <div v-if="totalWords">
                        <div class="px-4 py-2">
                            <v-layout>
                                <v-flex xs6>
                                    <p class="body-1 ma-0">
                                        <strong>Key</strong>
                                    </p>
                                </v-flex>
                                <v-flex xs6>
                                    <p class="body-1 ma-0">
                                        <strong>Value</strong>
                                    </p>
                                </v-flex>
                                <v-flex xs1>
                                </v-flex>
                            </v-layout>
                        </div>
                        <template  v-for="(value, key) in words">
                            <div :key="`${key}-tile`" class="word-list-item px-4 py-2">
                                <v-layout align-center>
                                    <v-flex xs6>
                                        <p class="body-1 ma-0">{{ key }}</p>
                                    </v-flex>
                                    <v-flex xs6>
                                        <p class="body-1 ma-0">{{ value }}</p>
                                    </v-flex>
                                    <v-flex xs1 class="text-xs-right">
                                        <v-btn icon ripple @click="removeWord(key)" class="delete-button">
                                            <v-icon color="grey lighten-1">clear</v-icon>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </template>
                    </div>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            newKey: '',
            newValue: '',
            words: {
                test: 'test'
            },
        }),
        computed: {
            totalWords() {
                return Object.keys(this.words).length;
            },
        },
        methods: {
            addWord() {
                this.words = {
                    ...this.words,
                    [this.newKey.toString()]: this.newValue,
                };

                this.newKey = '';
                this.newValue = '';
            },

            removeWord(key) {
                const { [key]: removed, ...words } = this.words;
                this.words = words;
            }
        }
    };
</script>

<style lang="stylus">
    .word-list-item
        transition background 250ms ease-in-out
        &:hover,
        &:focus
            background darken(#FFFFFF, 5%)
</style>
